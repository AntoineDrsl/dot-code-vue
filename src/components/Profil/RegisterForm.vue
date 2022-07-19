<template>
	<div
		id="RegisterForm"
		class="bg-white text-black p-4 rounded-3xl"
	>
		<div class="block mt-2 mb-10">
			<input
				id="id-input"
				v-model="name"
				type="text"
				class="w-full mt-4 py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Username"
			>
			<input
				id="id-input"
				v-model="email"
				type="text"
				class="w-full mt-4 py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Email"
			>
			<p
				v-if="!hasValidEmailFormat"
				class="text-red-500 ml-10"
			>
				Le format du mail n'est pas valide
			</p>
			<input
				id="id-input"
				v-model="password"
				type="password"
				class="w-full mt-4 py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Password"
			>
			<input
				id="id-input"
				v-model="confirmPassword"
				type="password"
				class="w-full mt-4 py-2 px-4 rounded-full border-none bg-space-dark-blue text-white"
				placeholder="Confirm Password"
			>
			<p
				v-if="!hasValidPassword"
				class="text-red-500 ml-10"
			>
				Les deux champs ne correspondent pas
			</p>
		</div>
		<p class="text-center text-xs">
			<span class="bold">En soumettant la demande d'inscription, vous acceptez</span> <br>
			nos termes d'utilisation <span class="font-bold">et</span> la politique de confidentialité
		</p>
		<div class="w-full flex justify-center">
			<button
				:disabled="!hasValidForm"
				class="w-4/5 mt-2 mb-4 text-center rounded-full font-bold text-white px-4 py-2"
				:class="{
					'cursor-pointer bg-space-dark-blue hover:bg-white hover:text-space-dark-blue' : hasValidForm,
					'bg-gray-300 cursor-not-allowed' : ! hasValidForm
				}"
				@click="onRegister"
			>
				S'inscrire
			</button>
		</div>
		<p class="text-xs mt-10 text-center">
			Vous avez déjà un compte ?
			<a
				class="font-bold no-underline cursor-pointer"
				href="/login"
			>
				Connexion
			</a>
		</p>
	</div>
</template>

<script>
import axios from "axios";

export default {
    name: "RegisterForm",
    data() {
        return {
            name : "",
            email: "",
            password: "",
            confirmPassword: "",
            id: null
        }
    },
    computed : {
        hasValidForm() {
            return this.hasValidEmailFormat
            && this.hasValidPassword
            && this.name.length > 0
            && this.password.length > 0
            && this.confirmPassword.length > 0
            && this.email.length > 0;
        },
        hasValidEmailFormat() {
            if(this.email.length > 0) return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) // eslint-disable-line
            else return true;
        },
        hasValidPassword() {
            if (this.password.length > 0 && this.confirmPassword.length > 0) {
              return this.password === this.confirmPassword;
            }
            return true;
        }
    },
    mounted() {
      this.getUserGuest()
    },
    methods: {
        onRegister() {
          axios.post(process.env.VUE_APP_API_URL + `auth/register?id=${this.id}`, {
            email: this.email.toLowerCase(),
            pseudo: this.name,
            password: this.password,
            socket_id: sessionStorage.getItem('socket_id')
          }).then(async res => {
            localStorage.setItem('user', res.data.user.id);
            await this.$router.push({name: 'login'});
          }).catch(error => console.warn(error.error)); // TODO FAIRE UN TRUC
        },
        getUserGuest() {
          this.id = localStorage.getItem('user')
          axios.get(process.env.VUE_APP_API_URL + `user/${this.id}`)
              .then((response) => {
                this.name = response.data.pseudo ?? '';
              });
        }
    }
}
</script>

<style scoped>
</style>
