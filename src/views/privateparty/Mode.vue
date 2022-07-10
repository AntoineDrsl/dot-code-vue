<template>
	<div class="relative z-50">
		<a
			class="flex text-white no-underline ml-10"
			href="/"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 mt-1"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
			retour
		</a>
		<div class="w-full flex">
			<div class="ml-32 text-center">
				<h3 class="geminis  text-space-green text-4xl">
					Joueurs {{ playerNumber }}/{{ playerMaxNumber }}
				</h3>
				<div class="bg-white rounded-xl p-1 h-full">
					<select
						id="PlayerMaxNbr"
						v-model="playerMaxNumber"
						name="PlayerMaxNumber"
						class="geminis text-space-dark-blue w-full p-2"
					>
						<option value="2">
							2 joueurs
						</option>
						<option value="4">
							4 joueurs
						</option>
						<option value="6">
							6 joueurs
						</option>
						<option value="10">
							10 joueurs
						</option>
						<option value="20">
							20 joueurs
						</option>
						<option value="30">
							30 joueurs
						</option>
					</select>
					<div class="bg-space-dark-blue mt-2 pt-2 pb-1 text-lg font-bold rounded-full">
						<p>Momoko</p>
					</div>
				</div>
			</div>
			<div class="ml-24 w-7/12">
				<h3 class="geminis player-title text-space-green">
					Mode de jeux
				</h3>
				<div class="bg-white rounded-xl p-4 h-4/6">
					<div class="bg-space-dark-blue w-1/3 p-4 text-center font-bold text-2xl rounded-lg">
						Mode De Jeu 1
					</div>
				</div>
				<div class="flex space-x-4 mt-20 bg-white rounded-xl p-4">
					<SpaceButton
						class="w-1/2"
						text="Inviter dans la partie"
					/>
					<SpaceButton
						class="w-1/2"
						text="Démarer la partie"
					/>
				</div>
			</div>
		</div>
		<div />
	</div>
</template>

<script>
import SpaceButton from "../../components/SpaceButton.vue"
export default {
    name: "PrivateMode",
    components: { SpaceButton },
    data() {
        return {
            playerMaxNumber: 2,
            playerNumber: 0
        };
    }
}
</script>

<style scoped>

.button-mode {
  width: 40%;
  margin-top: 2%;
}

</style>