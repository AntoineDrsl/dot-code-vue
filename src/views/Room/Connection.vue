<template>
	<div id="h-full">
		<div class="w-full flex justify-center">
			<img src="@/assets/images/SpaceCode_DashboardLogOut.png">
		</div>
		<div class="w-full flex justify-center -mt-24">
			<div class="w-1/2 rounded-lg bg-white text-black">
				<h3 class="text-center text-4xl geminis text-shadow mt-4 mb-5">
					Entrez le numéro de votre partie
				</h3>
				<div class="w-1/2 ml-32">
					<input
						id="id-input"
						v-model="pin"
						type="text"
						class="w-full p-2 text-3xl mt-4 ml-14 rounded-full border-none bg-space-dark-blue text-white text-center"
						placeholder="ID Room"
					>
					<span class="text-red-500">{{ error }}</span>
				</div>
				<SpaceButton
					text="Annuler"
					link="home"
					class="w-1/4 mb-10 float-left mt-10 ml-40"
				/>
				<SpaceButton
					text="Confirmer"
					class="w-1/4 mb-10 float-right mt-10 mr-40"
					@click.native="roomConnection"
				/>
			</div>
		</div>
		<img
			class="w-1/12 -mt-16 float-right mr-80 opacity-90"
			src="@/assets/images/diamond.png"
			alt=""
		>

		<p class="text-center ml-96">
			Vous voulez plutot créer votre propre room ? <a
				class="text-white no-underline"
				:href="'/'"
			>C'est ici !</a>
		</p>
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
        const room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.pin}`)
          .then((res) => res.data)
          .catch(() => {
            this.error = 'Cette room est introuvable';
          });

        if(!room) {
          this.error = 'Cette room est introuvable';
          return;
        }

        // Connect user
        const userId = localStorage.getItem('user');
        await axios.patch(`${process.env.VUE_APP_API_URL}user/${userId}/connect`, {
          room_id: room.id
        });

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
