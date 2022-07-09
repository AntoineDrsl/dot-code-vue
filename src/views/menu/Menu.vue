<template>
  <div class="h-screen">
    <div class="h-full flex flex-col items-center justify-content-between py-5">
      <img alt="spacecode_logo" class="w-24" src="@/assets/images/SpaceCodeGreenLogo.png">

      <div class="flex flex-col space-y-2 bg-white rounded-3xl w-25 text-center py-12">
        <div class="text-space-dark-blue font-bold cursor-pointer">
          Connexion
        </div>
        <div class="text-space-dark-blue font-bold cursor-pointer">
          Inscription
        </div>
      </div>

      <div>
        <ul class="flex w-full list-none font-bold text-space-green p-0 space-x-12">
          <li>
            <a href="#"><img src="@/assets/images/twitter.png"></a>
          </li>
          <li class="">
            <a href="#"><img src="@/assets/images/facebook.png"></a>
          </li>
          <li class="">
            <a href="#"><img src="@/assets/images/linkedin.png"></a>
          </li>
          <li class="">
            <a href="#"><img src="@/assets/images/discord.png"></a>
          </li>
          <li class="">
            <a href="#"><img src="@/assets/images/twitch.png"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Menu"
  }
</script>
