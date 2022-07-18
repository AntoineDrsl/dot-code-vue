<template>
	<div class="h-full flex flex-col items-center">
		<!-- Img -->
		<img src="@/assets/images/SpaceCode_DashboardLogOut.png">

		<!-- Card -->
		<div class="relative flex flex-col items-center w-1/2 -mt-24 rounded-lg bg-white text-black">
			<h3 class="text-center text-4xl geminis text-shadow mt-4 mb-5">
				Rejoignez une partie
			</h3>
			<input
				id="id-input"
				v-model="pin"
				type="text"
				class="w-1/2 p-2 text-3xl rounded-full border-none bg-space-dark-blue text-white text-center"
				placeholder="ID Room"
			>
			<span class="text-red-500">{{ error }}</span>
			<div class="flex justify-between w-1/2 mb-10 mt-7">
				<SpaceButton
					text="Annuler"
					link="home"
					class="w-5/12"
				/>
				<SpaceButton
					text="Confirmer"
					class="w-5/12"
					@click.native="roomConnection"
				/>
			</div>
			<img
				class="absolute -bottom-8 -right-8 w-2/12 opacity-90"
				src="@/assets/images/diamond.png"
				alt=""
			>
		</div>
	</div>
</template>

<script>
  import SpaceButton from '../../components/SpaceButton.vue';
  import axios from "axios";

  export default {
    name: "Connection",
    components: {
      SpaceButton
    },
    data() {
      return {
        pin: '',
        error: ''
      }
    },
    methods: {
      async roomConnection() {
        // Get room
        const room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.pin.toUpperCase()}`)
          .then((res) => res.data)
          .catch(() => {
            this.error = 'Cette room est introuvable';
          });

        if(!room) {
          this.error = 'Cette room est introuvable';
          return;
        }

				if(room.has_started) {
					this.error = 'La partie a déjà commencé';
					return;
				}

        // Connect user
        const userId = localStorage.getItem('user');
        const res = await axios.patch(`${process.env.VUE_APP_API_URL}user/${userId}/connect`, {
          room_id: room.id
        })
					.then((res) => res.data)
					.catch(() => {
            this.error = 'Connexion à la room impossible';
          });

				if(res.error) {
					this.error = res.error
					return;
				}

        // Emit connection event
        this.$socket.client.emit('userJoinsRoom', {
          pin: this.pin
        });

        return await this.$router.push({ name: 'room.pseudo', params: { pin: this.pin } });
      }
    }
  };
</script>

<style scoped>
</style>
