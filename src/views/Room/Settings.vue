<template>
	<div class="h-screen flex flex-col justify-between items-center pt-8 px-16">
		<h4 class="text-space-green absolute left-5 top-5">
			# {{ room ? room.pin : '' }}
		</h4>

		<!-- Logo -->
		<img 
			src="@/assets/images/SpaceCodeGreenLogo.png" 
			class="w-16"
		>

		<!-- Cards -->
		<div 
			v-if="user && room"
			class="w-full flex justify-around"
		>
			<!-- Players -->
			<div class="w-3/12">
				<h3 class="geminis text-space-green">
					{{ room.users.length }} joueurs
				</h3>
				<div class="w-full h-96 bg-white rounded-lg">
					<div 
						v-if="room && room.users.length"
						class="flex flex-col items-end w-full h-full overflow-scroll"
					>
						<div 
							v-for="roomUser in room.users"
							:key="roomUser.slug"
							class="flex items-center h-12 w-3/4 mt-3 pl-5 bg-space-dark-blue rounded-l-full text-lg font-bold shadow-pseudo"
							:class="{ 'text-space-green': roomUser.id == user.id }"
						>
							{{ roomUser.pseudo }} 
							<img 
								v-if="room.owner.id == roomUser.id"
								src="@/assets/images/meteore.png" 
								alt="owner"
								class="w-8 mb-1 ml-2"
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Game mode -->
			<div class="w-8/12">
				<h3 class="geminis text-space-green">
					Mode de jeux
				</h3>
				<div class="flex flex-wrap w-full h-80 mb-4 bg-white rounded-lg overflow-y-scroll p-3 custom-scroll">
					<div 
						class="flex flex-col justify-center items-center h-1/2 mx-1 mt-2 rounded-lg bg-space-dark-blue text-lg" 
						:class="{ 
							'cursor-pointer': room.owner && room.owner.id == user.id,
							'opacity-50': (!room.owner || room.owner.id != user.id) && room.mode != 'vs',
							'border-4 border-space-green text-space-green': room.mode == 'vs',
						}"
						style="width: 31%;"
						@click="changeMode('vs')"
					>
						<span>Corrige l'erreur</span>
						<span>Compétitif</span>
					</div>
					<div 
						class="flex flex-col justify-center items-center h-1/2 mx-1 mt-2 rounded-lg bg-space-dark-blue text-lg" 
						:class="{ 
							'cursor-pointer': room.owner && room.owner.id == user.id,
							'opacity-50': (!room.owner || room.owner.id != user.id) && room.mode != 'multi',
							'border-4 border-space-green text-space-green': room.mode == 'multi', 
						}"
						style="width: 31%;"
						@click="changeMode('multi')"
					>
						<span>Corrige l'erreur</span>
						<span>Coopératif</span>
					</div>
				</div>
				<SpaceButton
					text="Démarrer la partie"
					:disabled="!room.owner || room.owner.id != user.id"
					@click.native="launchGame"
				/>
			</div>
		</div>

		<!-- Networks -->
		<ul class="flex list-none text-space-green">
			<li>
				<a href="#">
					<img 
						src="@/assets/images/twitter.png"
						class="w-6"
					>
				</a>
			</li>
			<li class="ml-6">
				<a href="#">
					<img 
						src="@/assets/images/facebook.png"
						class="w-6"
					>
				</a>
			</li>
			<li class="ml-6">
				<a href="#">
					<img 
						src="@/assets/images/linkedin.png"
						class="w-6"
					>
				</a>
			</li>
			<li class="ml-6">
				<a href="#">
					<img 
						src="@/assets/images/discord.png"
						class="w-6"
					>
				</a>
			</li>
			<li class="ml-6">
				<a href="#">
					<img 
						src="@/assets/images/twitch.png"
						class="w-6"
					>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
  import router from '../../router'
  import axios from 'axios'
	import SpaceButton from "@/components/SpaceButton"

	export default {
		name: 'Settings',
		components: {
			SpaceButton,
		},
    data() {
      return {
        user: null,
        room: null,
        err: null,
      };
    },
		async created() {
			// Get user
      const userId = localStorage.getItem('user');
      this.user = await axios.get(`${process.env.VUE_APP_API_URL}user/${userId}`).then(res => res.data);

      // Get room details
      this.room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.$route.params.pin}`)
        .then((res) => res.data)
        .catch(() => this.$router.push({ name: 'room.connection' }));
    },
		methods: {
			async changeMode(mode) {
				// Only owner can change
				if(this.room?.owner?.id != this.user.id) {
					return;
				}

				if(this.room?.mode == mode) {
					return;
				}

        // Update room mode
        await axios.patch(`${process.env.VUE_APP_API_URL}room/${this.room.id}/mode`, {
          mode: mode
        });

        // Emit event
        this.$socket.client.emit('changeRoomMode', {
          pin: this.$route.params.pin,
					mode: mode,
        });
			},
			async launchGame() {
				// Only owner can launch
				if(this.room?.owner?.id != this.user.id) {
					return;
				}

				// Check room not already started
				if(this.room?.has_started) {
					return;
				}

				// Check room mode is set
				if(!this.room?.mode) {
					return;
				}

				// Check at least 2 players
				if(this.room?.users.length < 2) {
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
			}
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
			// Room mode has been changed
			changeRoomMode(room) {
				this.room = room;
			},
			// Room has been launched
			launchGame(room) {
				if(room.mode == 'vs') {
        			router.push({ path: `/room/${this.$route.params.pin}/teams` })
				} else if(room.mode == 'multi') {
					router.push({ path: `/room/${this.$route.params.pin}` })
				}
			}
    },
	}
</script>

<style lang="css">
	/* Custom scrollbar */
	.custom-scroll::-webkit-scrollbar {
		width: 15px;
		height: 90%;
		right: 10px;
	}
	.custom-scroll::-webkit-scrollbar-track {
		background-color: #090B31;
		box-shadow: inset 0 0 5px #090B31; 
		border-radius: 10px;
		margin-top: 20px;
    margin-bottom: 20px;
		margin-right: 30px;
	}
	.custom-scroll::-webkit-scrollbar-thumb {
		background: #44F5BA; 
		border-radius: 10px;
	}
</style>