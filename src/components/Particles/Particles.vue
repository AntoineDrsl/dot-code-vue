<template>
  <div class="particles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
  import 'particles.js'
  import {params} from "../../config/particle";

  export default {
    name: "Particles",
    mounted() {
      this.initParticles()
    },
    methods: {
      initParticles() {
        window.particlesJS("particles-js", params)
      }
    }
  };
</script>

<style scoped>
  #particles-js {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
