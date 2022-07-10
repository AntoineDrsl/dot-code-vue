<template>
	<div class="body">
		<Navbar />
		<div class="home-container">
			<slot name="content" />
		</div>
		<Footer />
	</div>
</template>

<script>
    import Footer from '@/layouts/partials/home-layout/Footer'
    import Navbar from "./partials/home-layout/Navbar";

    export default {
        name: 'HomeLayout',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>
    .home-container {
        margin-top: 12vh;
        padding: 0 100px;
    }
</style>
