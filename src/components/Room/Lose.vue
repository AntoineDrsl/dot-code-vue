<template>
	<div id="lose">
		<a
			class="text-white no-underline"
			href=""
		>Retour dans le CyberSpace</a>
		<div class="relative bg-white rounded-lg p-2 text-black text-shadow">
			<div class="geminis">
				<h2 class="text-5xl xl:text-8xl">
					Dommage !
				</h2>
				<p class="text-xl -mt-2">
					Tu t'es fait propulser vers <br> d'autres cieux...
				</p>
			</div>
			<div>
				<p class="text-4xl font-bold w-1/2">
					Souhaites-tu repartir à l’assaut ?
				</p>
			</div>
			<img
				class="absolute w-2/3 -top-44 -right-64"
				src="@/assets/images/SpaceCode_AstroLoose-min.png"
			>
		</div>
		<div class="flex p-1.5 ml-1 space-x-4">
      <button
      class="w-full bg-space-green text-center rounded-full border-none relative text-white text-xl font-bold px-4 py-2 transition duration-150 hover:bg-space-darker-green shadow-space"
      @click="$router.push('/')"
      >
        Evidemment !
      </button>
      <button
      class="w-full bg-space-red text-center rounded-full border-none relative text-white text-xl font-bold px-4 py-2 transition duration-150 hover:bg-space-darker-red shadow-space"
      @click="$router.push('/')"
      >
        Non, j'ai eu ma dose
      </button>
    </div>
	</div>
</template>

<script>
export default {
  name: "Lose",
};
</script>

<style scoped>
* {
  color: black;
}

.text-title {
  font-size: 400%;
  text-shadow: #30b5ff 1px 0 50px;
  margin-top: 3%;
}

.sub-title {
    margin-top: -5%;
    font-size: 150%;
}

.text-main {
    font-size: 250%;
    font-weight: bold;
    width: 55%;
    line-height: 90%;
    margin-top: -2%;
}

.back-link {
  color: white;
  text-decoration: none;
}

.lose-card {
  position: relative;
  background: white;
  height: 40vh;
  border-radius: 10px;
  padding: 3%;
}

.lose-image {
  position: absolute;
  right: -15%;
  top: -5%;
  width: 40%;
}
.buttons {
  display: flex;
  padding: 1%;
  margin-left: 2%;
}

.continue {
  width: 100%;
  background-color: #44f5ba;
  text-align: center;
  border-radius: 30px;
  font-weight: 700;
  padding: 10px 0;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  border: none;
  position: relative;
}

.continue:hover{
   background-color: #22c790;
}
.finished {
  width: 100%;
  margin-left: 5%;
  background-color: #db3737;
  text-align: center;
  border-radius: 30px;
  font-weight: 700;
  padding: 10px 0;
  box-shadow: 0px 0px 50px 5px rgba(48, 181, 255, 0.8);
  transition: 0.25s;
  cursor: pointer;
  color: #fff;
  border: none;
  position: relative;
}

.finished:hover{
    background-color: #a82323;
}
</style>
