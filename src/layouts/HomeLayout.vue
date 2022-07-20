<template>
	<div class="body">
		<Navbar />
		<div class="px-4 sm:px-10 md:px-16">
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
