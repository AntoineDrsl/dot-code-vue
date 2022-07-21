<template>
	<div
		id="LoginForm"
		class="bg-white text-black p-4 rounded-3xl"
	>
        <div class="error-box" v-if="error">
            <span class="text-space-darker-red">Email ou mot de passe incorrect</span>
        </div>
		<div class="block mt-4 mb-10">
			<input
				id="id-input"
				v-model="email"
				type="text"
				class="w-full py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Email"
			>
			<input
				id="id-input"
				v-model="password"
				type="password"
				class="w-full mt-4 py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Password"
			>
		</div>
		<div class="w-full flex justify-center">
			<button
                type="button"
				class="w-4/5 mt-2 mb-4 text-center rounded-full font-bold text-white px-4 py-2 cursor-pointer bg-space-dark-blue transition duration-150 btn-hover"
				@click="onLogin"
                :disabled="loading"
                :class="{
					'bg-gray-300 cursor-not-allowed' : loading
				}"
			>
				Se connecter
			</button>
		</div>
        <p class="text-xs mt-2 text-center">
            Pas encore inscrit ?
            <router-link :to="{name: 'register'}" class="font-bold no-underline cursor-pointer">
                    S'enregistrer
            </router-link>
        </p>
	</div>
</template>

<script>
import axios from "axios";

export default {
    name: "LoginForm",
    data() {
        return {
            email: "",
            password: "",
            error: false,
            loading: false
        }
    },
    methods: {
        async onLogin() {
            this.error = false;
            this.loading = true;
            const userId = localStorage.getItem('user');

            await axios.post(process.env.VUE_APP_API_URL + `auth/login?id=${userId}`, {
                  email: this.email.toLocaleLowerCase(),
                  password: this.password
            }).then((response) => {
                  if ('id' in response.data) {
                    localStorage.setItem('token', response.data.access_token);
                    localStorage.setItem('user', response.data.id);
                    sessionStorage.setItem('username', response.data.username);
                    return this.$router.push({name: 'home'});
                  }
            }).catch((error) => this.error = true);

            this.loading = false;
        }
    }
}
</script>

<style scoped>
input, button {
    box-shadow: 0 0 20px rgba(77, 42, 156, 0.43);
}

.btn-hover:hover {
    /* OBLIGER LE SURCLASSER AVEC !IMPORTANT CAR LE TEXT-WHITE DE TAILWIND MET AUSSI !IMPORTANT... */
    color: #090B31 !important;
    background-color: white;
}
</style>
