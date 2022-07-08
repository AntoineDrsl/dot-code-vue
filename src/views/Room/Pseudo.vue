<template>
	<div id="h-screen">
		<p class="text-3xl p-2 text-space-green">
			#{{ $route.params.pin }}
		</p>
		<div class="w-full flex justify-center">
			<img
				src="@/assets/images/SpaceCode_DashboardLogOut.png"
				alt=""
			>
		</div>
		<div class="w-full flex justify-center -mt-24">
			<div class="grid justify-items-center w-1/2 h-auto bg-white rounded-3xl space-y-4 z-minus">
				<h1 class="geminis text-space-dark-blue mt-4 text-3xl xl:text-5xl">
					Entre ton Nom
				</h1>
				<div class="input w-1/2 h-1/12">
					<input
						v-model="pseudo"
						type="text"
						placeholder="Pseudo"
						class="text-lg py-2 w-full rounded-full bg-space-dark-blue shadow-space text-white text-center"
					>
				</div>
				<div>{{ error }}</div>
				<SpaceButton
					class="w-1/2 mb-4"
					text="Continuer"
					@click.native="sendPseudo"
				/>
			</div>
		</div>
		<div>
			<img
				class="w-1/12 -mt-16 float-right mr-80 opacity-90"
				src="@/assets/images/diamond.png"
				alt=""
			>
		</div>
	</div>
</template>

<script>
  import SpaceButton from '../../components/SpaceButton'
  import axios from 'axios'

  export default {
    name: "Pseudo",
    components: { 
      SpaceButton 
    },
    data() {
      return {
        pseudo: '',
        error: ''
      }
    },
    mounted() {
      this.getPseudo();
    },
    methods: {
      async getPseudo() {
        // Get user pseudo
        const userId = localStorage.getItem('user');
        const user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data);
        this.pseudo = user.pseudo;
      },
      async sendPseudo() {
        // Update user pseudo
        const userId = localStorage.getItem('user');
        await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId + '/pseudo', {
            pseudo: this.pseudo
        });

        // Emit connection event
        this.$socket.client.emit('userSendPseudo', {
          pin: this.$route.params.pin
        });

        await this.$router.push({ name: 'room.team', params: { pin: this.$route.params.pin } });
      }
    }
  };
</script>

<style scoped>
</style>
