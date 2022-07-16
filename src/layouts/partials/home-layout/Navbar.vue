<template>
	<div class="h-24 flex justify-around items-center fixed top-0 left-0 w-screen z-50 bg-space-dark-blue">
		<img
			class="h-2/5 ml-24"
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
    export default {
        name: 'Navbar',
        methods: {
            openMenu() {
                this.$router.push('/menu');
            }
        }
    }
}
</script>

<style scoped>
.btn-astro {
    height: 40%;
    margin-right: 40px;
}
</style>
