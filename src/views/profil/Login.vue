<template>
	<div
		id="Login"
		class="h-screen"
	>
		<div class="w-full flex justify-center mt-2">
			<img
				class="w-24"
				src="@/assets/images/SpaceCodeGreenLogo.png"
			>
		</div>
		<div class="w-full mt-5 flex justify-center relative z-20">
            <SpaceButton
                class="w-2/6"
                text="Retour à l'accueil"
                link="home"
            />
			<SpaceButton
				class="w-2/6 ml-14"
				text="Se créer un compte"
				link="register"
			/>
		</div>
		<img
			class="w-1/2 -mt-44  -ml-10 relative z-10"
			src="@/assets/images/planet-ring.png"
		>
		<div class="w-full -mt-96 flex relative z-30">
			<div class="w-1/2 ml-40">
				<a
					class="flex items-center text-white no-underline cursor-pointer"
					href="/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					Retour dans le cyberspace
				</a>
				<h1 class="text-shadow mt-4 lg:text-7xl xl:text-9xl geminis geminis">
					Welcome<br>Back
				</h1>
				<ul class="flex w-full list-none font-bold text-space-green">
					<li class="ml-6">
						FOLLOW US
					</li>
					<li class="ml-16">
						<a href="#"><img src="@/assets/images/twitter.png"></a>
					</li>
					<li class="ml-6">
						<a href="#"><img src="@/assets/images/facebook.png"></a>
					</li>
					<li class="ml-6">
						<a href="#"><img src="@/assets/images/linkedin.png"></a>
					</li>
					<li class="ml-6">
						<a href="#"><img src="@/assets/images/discord.png"></a>
					</li>
					<li class="ml-6">
						<a href="#"><img src="@/assets/images/twitch.png"></a>
					</li>
				</ul>
			</div>
			<div class="w-2/6 -mt-10 -ml-32">
				<LoginForm />
				<ConnexionButton />
			</div>
		</div>
	</div>
</template>

<script>
import LoginForm from "../../components/Profil/LoginForm.vue";
import SpaceButton from "../../components/SpaceButton.vue";
import ConnexionButton from "../../components/Profil/ConnexionButton.vue";
export default {
    name : "Login",
  components: { LoginForm, SpaceButton, ConnexionButton }
}
</script>

<style scoped>
</style>
