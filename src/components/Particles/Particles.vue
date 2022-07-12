<template>
  <div class="particles">
    <div id="particles-js"></div>
  </div>
</template>

<script>
  import 'particles.js'
  export default {
    name: "Particles",
    mounted() {
      this.initParticles()
    },
    methods: {
      initParticles() {
        window.particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
            },
            "move": {
              "enable": true,
              "speed": 0.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "resize": true
            }
          },
          "retina_detect": true
        })
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
