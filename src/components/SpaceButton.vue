<template>
	<router-link :to="{ name: link }">
		<div
			class="bg-space-dark-blue hover:bg-white hover:text-space-blue text-center rounded-full font-bold py-2 px-1 text-xs xl:text-base cursor-pointer shadow-space"
		>
			{{ text.toUpperCase() }}
		</div>
	</router-link>
</template>

<script>
    export default {
        name: 'SpaceButton',
        props: {
            text: String,
            link: String
        }
    }
</script>

<style scoped>
    a {
    color: white;
    text-decoration: none;
    }
</style>
