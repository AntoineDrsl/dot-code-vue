<template>
  <div>
      <div class="w-full mt-4 flex relative z-50">
            <div class="w-1/2 ml-24">
                <a class="flex text-white no-underline" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Retour dans le cyberspace
                  </a>
                <h1 class="lg:text-7xl xl:text-9xl text-shadow mt-4 geminis">WELCOME <br> all space <br> traveler !</h1>
            </div>
            <div class="w-2/5">
                <h2 class="geminis text-space-green text-center">Creer une partie privée</h2>
                <div class="main-creation mt-10 bg-white w-full p-4 rounded-lg flex flex-col justify-center">
                    <div class="flex">
                      <div class="bg-space-dark-blue rounded-full p-4">
                        <img src="@/assets/images/meteore.png">
                      </div>
                      <div class="mt-4 ml-4">
                        <h3 class="geminis text-space-green">Choisis un Prenom</h3>
                        <input type="text" placeholder="Username" class="w-full mt-3 text-3xl p-2 border-none bg-space-dark-blue text-white rounded-full"/>
                      </div>
                    </div>
                    <SpaceButton link="gameMode" class="mt-14" text="Démarer la partie"/>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import SpaceButton from "../../components/SpaceButton.vue";
export default {
    name: "PrivateCreation",
    components: { SpaceButton }
}
</script>

<style scoped>
</style>