<template>
	<div class="h-24 flex justify-around items-center fixed top-0 left-0 w-screen z-50 bg-space-dark-blue">
        <Menu v-if="showMenu" @close-menu="openMenu"/>
		<img
			class="h-2/5 ml-24 cursor-pointer"
			src="@/assets/images/btn-moon.svg"
			alt="Moon button"
            @click="openMenu"
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
    import Menu from "../../../views/menu/Menu";
    export default {
        name: 'Navbar',
        components: {Menu},
        data() {
          return {
              showMenu: false
          }
        },
        methods: {
            openMenu() {
                this.showMenu = !this.showMenu;
            }
        }
    }
</script>
