<template>
  <div id="win">
    <a class="text-white no-underline" href="">Retour dans le CyberSpace</a>
    <div class="relative bg-white rounded-lg p-2 text-black text-shadow">
      <div class="geminis">
        <h2 class="text-5xl xl:text-8xl">Bravo !</h2>
        <p class="text-xl -mt-2">
          Tu as remporté cette <br />
          bataille intergalactique
        </p>
      </div>
      <div>
        <p class="text-4xl font-bold w-1/2">Souhaites-tu repartir à l’assaut ?</p>
      </div>
      <img class="absolute w-2/3 top-0 -right-44" src="@/assets/images/SpaceCode_AstroWin.png" />
    </div>
    <div class="flex p-1.5 ml-1 space-x-4">
      <button class="w-full bg-space-green text-center rounded-full border-none relative text-white text-xl font-bold px-4 py-2 transition duration-150 hover:bg-space-darker-green shadow-space">Evidemment !</button>
      <button class="w-full bg-space-red text-center rounded-full border-none relative text-white text-xl font-bold px-4 py-2 transition duration-150 hover:bg-space-darker-red shadow-space">Non, j'ai eu ma dose</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Win",
};
</script>

<style scoped>
</style>
