<template>
	<div class="h-24 flex justify-around items-center fixed top-0 left-0 w-screen z-50 bg-space-dark-blue">
        <transition>
            <Menu v-show="showMenu" @close-menu="showMenu = !showMenu"/>
        </transition>

		<img
			class="h-2/5 ml-24 cursor-pointer"
			src="@/assets/images/btn-moon.svg"
			alt="Moon button"
            @click="showMenu = !showMenu"
		>
		<span class="geminis text-4xl">SpaceCode</span>
        <router-link :to="{ name: 'login' }">
            <img
                class="h-2/5 mr-20"
                src="@/assets/images/btn-astro.svg"
                alt="Astro button"
            >
        </router-link>
	</div>
</template>

<script>
    import Menu from "../../../components/Menu/Menu";
    export default {
        name: 'Navbar',
        components: {Menu},
        data() {
          return {
              showMenu: false
          }
        }
    }
</script>

<style>
.v-enter-active {
    animation: menu-animation 0.75s ease-in-out;
}

.v-leave-active {
    animation: menu-animation 0.75s ease-in-out reverse;
}

@keyframes menu-animation {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
