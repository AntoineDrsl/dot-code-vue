<template>
	<div class="body">
		<div class="h-screen flex">
			<div class="h-full lg:w-9/12 xl:w-4/5 mx-8">
				<Topbar />
				<slot name="content" />
			</div>
			<div class="w-1/5 h-full bg-white flex flex-col items-center text-space-dark-blue">
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
		</div>
	</div>
</template>

<script>
    import Topbar from '@/layouts/partials/game-layout/Topbar'

    export default {
        name: 'GameLayout',
        components: {
            Topbar
        }
    }
</script>

<style scoped>
</style>