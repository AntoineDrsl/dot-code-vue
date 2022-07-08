<template>
	<div
		id="LoginForm"
		class="bg-white text-black p-4 rounded-3xl"
	>
		<div class="block mt-2 mb-10">
			<input
				id="id-input"
				v-model="email"
				type="text"
				class="w-full mt-4 py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Username"
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
				class="w-4/5 mt-2 mb-4 text-center rounded-full font-bold text-white px-4 py-2 cursor-pointer bg-space-dark-blue hover:bg-white hover:text-space-dark-blue"
				@click="onLogin"
			>
				Se connecter
			</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
    name: "LoginForm",
    data() {
      return {
        email: "sharcan@gmail.com",
        password: "azerty123",
      }
    },
    methods: {
      onLogin() {
        const userId = localStorage.getItem('user');

        axios.post(process.env.VUE_APP_API_URL + `auth/login?id=${userId}`, {
          email: this.email,
          password: this.password
        }).then((response) => {
          if ('id' in response.data) {
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('user', response.data.id)
            return this.$router.push({name: 'home'});
          }
        })
      }
    }
}
</script>

<style scoped>
</style>