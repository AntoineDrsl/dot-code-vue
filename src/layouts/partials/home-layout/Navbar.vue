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
        <div class="flex items-center space-x-3">
            <img
                class="h-2/5"
                src="@/assets/images/btn-astro.svg"
                alt="Astro button"
            >

            <span v-if="username" class="text-space-green font-black ">{{username}}</span>
            <router-link v-else :to="{ name: 'login' }" class="text-space-green font-black hover:text-space-darker-green ease-out duration-300">
                SE CONNECTER
            </router-link>
        </div>
	</div>
</template>

<script>
    import Menu from "../../../components/Menu/Menu";
    export default {
        name: 'Navbar',
        components: {Menu},
        data() {
          return {
              showMenu: false,
              username: ''
          }
        },
        mounted() {
            this.username = sessionStorage.getItem('username');
        }
    }
</script>

<style scoped>
a {
    text-decoration: none;
}

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
