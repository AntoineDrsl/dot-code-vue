<template>
  <div class="h-screen">
    <div class="w-full flex justify-center px-4 h-16 mt-4">
      <img src="@/assets/images/SpaceCodeGreenLogo.png" />
    </div>
    <img src="@/assets/images/Moon.png" class="opacity-70 w-1/3 top-0 relative z-10 ml-32" />
    <div class="w-full flex justify-center items-center -mt-96">
      <div class="flex relative z-30 justify-center">
        <Win />
      </div>
    </div>
    
  </div>
</template>

<script>
import Win from "../../components/Room/Win.vue";

export default {
  name: "RoomWin",
  components: { Win },
};
</script>

<style scoped>
</style>
