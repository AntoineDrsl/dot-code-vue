<template>
  <div class="h-screen">
    <div class="w-full flex justify-center px-4 h-16 mt-4">
      <img src="@/assets/images/SpaceCodeGreenLogo.png" />
    </div>
    <img src="@/assets/images/Moon.png" class="opacity-70 w-1/3 top-0 relative z-10 ml-32" />
    <div class="w-full flex justify-center items-center -mt-96">
      <div class="flex relative z-30 justify-center">
        <Lose />
      </div>
    </div>
   
  </div>
</template>

<script>
import Lose from "../../components/Room/Lose.vue";

export default {
  name: "RoomLose",
  components: { Lose },
};
</script>

<style scoped>

.lose {
  height: 100vh;
}

.topbar {
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.lose-main {
  width: 100%;
  height: 83vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lose-card-container {
  display: flex;
  position: relative;
  z-index: 3;
  justify-content: center;
}

.font-image {
  opacity: 70%;
  width: 40%;
  top: -80%;
  position: relative;
  z-index: 1;
}
</style>
