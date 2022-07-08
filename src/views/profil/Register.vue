<template>
	<div id="Register" class="h-screen">
		<div class="w-full flex justify-center mt-2">
			<img class="w-24" src="@/assets/images/SpaceCodeGreenLogo.png">
		</div>
		<img
			class="opacity-70 w-1/2 -mt-44  -ml-10 relative z-10"
			src="@/assets/images/planet-ice.png"
		>
		<div class="w-full -mt-96 flex relative z-30">
			<div class="w-1/2 ml-24 -mt-24">
				<a class="flex items-center text-white no-underline" href="/">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
					</svg>
					Retour dans le cyberspace
				</a>
				<h1 class="text-shadow mt-4 lg:text-7xl xl:text-9xl geminis">
					Welcome<br>on board !
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
			<div class="w-2/6 -mt-44">
				<h2 class="geminis sub-title text-center">
					Créer Notre compte
				</h2>
				<register-form />
			</div>
		</div>
	</div>
</template>

<script>
import RegisterForm from '../../components/Profil/RegisterForm.vue'
export default {
    name : "Register",
  components: { RegisterForm }
}
</script>

<style scoped> 
</style>