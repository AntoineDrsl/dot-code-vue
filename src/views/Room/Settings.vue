<template>
	<div class="h-screen flex flex-col justify-between items-center pt-8 px-16">
		<!-- Logo -->
		<img 
			src="@/assets/images/SpaceCodeGreenLogo.png" 
			class="w-16"
		>

		<!-- Cards -->
		<div class="w-full flex justify-around">
			<!-- Players -->
			<div class="w-3/12">
				<h3 class="geminis text-space-green">
					2 joueurs
				</h3>
				<div class="flex flex-col items-end w-full h-96 bg-white rounded-lg overflow-scroll	">
					<div class="flex items-center h-12 w-3/4 mt-3 pl-5 bg-space-dark-blue rounded-l-full text-lg font-bold shadow-pseudo">
						Coco l'astronaute
					</div>
					<div class="flex items-center h-12 w-3/4 mt-3 pl-5 bg-space-dark-blue rounded-l-full text-lg shadow-pseudo font-bold">
						Momoko
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
						style="width: 31%;"
					>
						<span>Corrige l'erreur</span>
						<span>Compétitif</span>
					</div>
					<div 
						class="flex flex-col justify-center items-center h-1/2 mx-1 mt-2 rounded-lg bg-space-dark-blue text-lg" 
						style="width: 31%;"
					>
						<span>Corrige l'erreur</span>
						<span>Compétitif</span>
					</div>
					<div 
						class="flex flex-col justify-center items-center h-1/2 mx-1 mt-2 rounded-lg bg-space-dark-blue text-lg" 
						style="width: 31%;"
					>
						<span>Corrige l'erreur</span>
						<span>Compétitif</span>
					</div>
					<div 
						class="flex flex-col justify-center items-center h-1/2 mx-1 mt-2 rounded-lg bg-space-dark-blue text-lg" 
						style="width: 31%;"
					>
						<span>Corrige l'erreur</span>
						<span>Compétitif</span>
					</div>
				</div>
				<SpaceButton
					text="Démarrer la partie"
					@click.native="createRoom"
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
	import SpaceButton from "@/components/SpaceButton"

	export default {
		name: 'Settings',
		components: {
			SpaceButton,
		}
	}
</script>

<style lang="css">
	/* Width */
	.custom-scroll::-webkit-scrollbar {
		width: 15px;
		height: 90%;
		right: 10px;
	}
	/* Track */
	.custom-scroll::-webkit-scrollbar-track {
		background-color: #090B31;
		box-shadow: inset 0 0 5px #090B31; 
		border-radius: 10px;
		margin-top: 20px;
    margin-bottom: 20px;
		margin-right: 30px;
	}
	/* Handle */
	.custom-scroll::-webkit-scrollbar-thumb {
		background: #44F5BA; 
		border-radius: 10px;
	}
</style>