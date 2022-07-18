<template>
	<div>
		<div class="h-screen flex">
      <div class="h-full w-full mx-8">
        <Topbar @open-sidebar="openSideBar"/>
        <slot name="content" />
      </div>
      <transition name="sidebar">
        <div v-if="opened"
             class="w-1/5 h-full bg-white flex flex-col items-center text-space-dark-blue">
          <img
              src="@/assets/images/games/halfmoon.png"
              alt="Lune"
              class="mt-14 mb-8 w-12"
          >
          <h1 class="geminis text-center text-4xl mb-8">
            Space<br>Code
          </h1>
          <slot name="sidebar" />
        </div>
      </transition>
		</div>
	</div>
</template>

<script>
    import Topbar from '@/layouts/partials/game-layout/Topbar';

    export default {
        name: 'GameLayout',
        components: {
            Topbar
        },
        data() {
          return {
            opened: false
          }
        },
        methods: {
          openSideBar(event) {
            this.opened = event;
          }
        }
    }
</script>

<style scoped>
  .test {
      max-width: 100vw;
  }
  .sidebar-enter-active {
    animation: sidebar-anim .5s;
  }
  .sidebar-leave-active {
    animation: sidebar-anim .5s reverse;
  }
  @keyframes sidebar-anim {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
