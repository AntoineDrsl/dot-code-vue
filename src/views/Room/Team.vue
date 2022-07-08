<template>
	<div id="roomTeam">
		<a
			class="text-white ml-6 no-underline"
			href="/"
		> Retour dans le cyberspace</a>
		<div class="mt-1 border-green shadow-space rounded-lg mx-4 p-1">
			<div class="flex flex-col">
				<h4 class="text-space-green">
					# {{ $route.params.pin }}
				</h4>
				<h3 class="geminis text-space-green  mb-4 flex justify-center text-xl md:text-2xl lg:text-4xl">
					Rejoins ton équipe avant <br>de commencer la partie !
				</h3>

				<!-- Teams -->
				<div
					v-if="room"
					class="flex justify-between ml-44 flex-col lg:flex-row"
				>
					<!-- Team 1 -->
					<div class="lg:w-1/2">
						<h3 class="text-space-green geminis">
							{{ room.teams[0] ? room.teams[0].name : '...' }}
						</h3>
						<div class="bg-white text-black w-3/4 rounded-xl flex flex-col  items-center">
							<div>
								<div
									v-if="room.teams[0] && room.teams[0].users.length > 0"
									class="pt-14 h-32 font-bold text-xl text-center"
								>
									<ul class="px-0">
										<li
											v-for="user in room.teams[0].users"
											:key="user.slug"
										>
											{{ user.pseudo }}
										</li>
									</ul>
								</div>
								<div
									v-else
									class="pt-14 h-32 font-bold text-xl text-center"
								>
									<p>L'équipe est actuellement <br>vide</p>
								</div>
							</div>

							<button
								v-if="room.teams[0]"
								class="bg-space-dark-blue mb-10 text-white hover:bg-white hover:text-space-dark-blue text-center rounded-full font-bold py-2 px-1 text-xs xl:text-base cursor-pointer shadow-space w-3/5"
								@click="joinTeam(room.teams[0].id)"
							>
								Rejoindre l'équipe {{ room.teams[0].name }}
							</button>
						</div>
					</div>

					<!-- Icons -->
					<div class="bg-black rounded-full h-24 w-24 -ml-44 hidden lg:block">
						<img src="@/assets/images/satelite.png">
					</div>
					<div class="bg-black rounded-full h-24 w-24 reltative -mr-24 z-30  hidden lg:block">
						<img src="@/assets/images/meteore.png">
					</div>

					<!-- Team 2 -->
					<div class="mt-10 lg:w-1/2 lg:ml-16 lg:mt-0">
						<h3 class="text-space-green geminis text-end mr-40">
							{{ room.teams[1] ? room.teams[1].name : '...' }}
						</h3>
						<div class="bg-white text-black w-3/4 rounded-xl flex flex-col  items-center">
							<div>
								<div
									v-if="room.teams[1] && room.teams[1].users.length > 0"
									class="pt-14 h-32 font-bold text-xl text-center"
								>
									<ul class="px-0">
										<li
											v-for="user in room.teams[1].users"
											:key="user.slug"
										>
											{{ user.pseudo }}
										</li>
									</ul>
								</div>
								<div
									v-else
									class="pt-14 h-32 font-bold text-xl text-center"
								>
									<div>
										<p>L'équipe est actuellement <br>vide</p>
									</div>
								</div>
							</div>

							<button
								v-if="room.teams[1]"
								class="bg-space-dark-blue mb-10 text-white hover:bg-white hover:text-space-dark-blue text-center rounded-full font-bold py-2 px-1 text-xs xl:text-base cursor-pointer shadow-space w-3/5"
								@click="joinTeam(room.teams[1].id)"
							>
								Rejoindre l'équipe {{ room.teams[1].name }}
							</button>
						</div>
					</div>
				</div>

				<div
					v-if="room"
					class="mt-4 lg:mt-14"
				>
					Joueurs dans la room: 
					<span
						v-for="user in room.users"
						:key="user.id"
					>
						{{ (user.pseudo ? user.pseudo : 'Guest ' + user.id) + ' ' }}
					</span>
				</div>

				<div class="w-full flex flex-col items-center lg:mb-10">
					<button
						class="text-center bg-white hover:bg-space-dark-blue text-space-dark-blue hover:text-white border-none cursor-pointer font-bold px-2 py-1.5 text-2xl rounded-full w-1/3 shadow-space transition duration-100"
						@click="launchGame()"
					>
						Démarrer la partie !
					</button>

					<div
						v-if="err"
						class="text-red-500 bg-white text-center w-2/5 rounded-lg mt-2"
					>
						{{ err }}
					</div>
				</div>
			</div>
		</div>
		<img
			class="w-1/12 h-1/12 -mt-28 opacity-90 float-right hidden lg:block"
			src="@/assets/images/diamond.png"
		>
	</div>
</template>

<script>
  import router from "../../router";
  import axios from 'axios'

  export default {
    name: "Team",
    data() {
      return {
        user: null,
        room: null,
        err: null,
      };
    },
    async mounted() {
      const userId = localStorage.getItem('user');
      this.user = await axios.get(`${process.env.VUE_APP_API_URL}user/${userId}`).then(res => res.data);

      // Get room details
      this.room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.$route.params.pin}`)
        .then((res) => res.data)
        .catch(() => this.$router.push({ name: 'room.connection' }));
    },
    methods: {
      async joinTeam(teamId) {
        if(!this.user || !this.checkNotAlreadyInTeam(teamId)) {
          return;
        }

        // Update user team
        await axios.patch(`${process.env.VUE_APP_API_URL}user/${this.user.id}/join-team`, {
          team_id: teamId
        });

        // Emit event
        this.$socket.client.emit('userJoinsTeam', {
          pin: this.$route.params.pin
        });
      },
      checkNotAlreadyInTeam(teamId) {
        if(this.room.teams[0].id == teamId && this.room.teams[0].users.find(user => user.id == this.user.id)) {
          return false;
        }
        if(this.room.teams[1].id == teamId && this.room.teams[1].users.find(user => user.id == this.user.id)) {
          return false;
        }
        return true;
      },

      launchGame() {
        if(!this.room.teams[0].users?.length || !this.room.teams[1].users?.length) {
          this.err = "Une équipe est vide :("
          return;
        }

        this.$socket.client.emit(
          "launchGame",
          { pin: this.$route.params.pin },
          (res) => {
            if (res.error) {
              this.err = res.error;
            }
          }
        );
      },
    },
    sockets: {
      // New user connected to room
      userJoinsRoom(room) {
        this.room = room;
      },
      // User send a new pseudo
      userSendPseudo(room) {
        this.room = room;
      },
      // User joins a team
      userJoinsTeam(room) {
        this.room = room
      },
      // Game is launching
      launchGame() {
        router.push({ path: `/room/${this.$route.params.pin}` });
      },
    },
  };
</script>

<style scoped>
</style>
