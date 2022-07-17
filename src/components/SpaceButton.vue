<template>
	<router-link 
		:to="{ name: link }"
		:class="{ 'pointer-events-none': disabled }"
	>
		<div
			class="bg-space-dark-blue hover:bg-white hover:text-space-blue text-center rounded-full font-bold py-2 px-1 text-xs xl:text-base cursor-pointer shadow-space"
			:class="{ 'opacity-50': disabled }"
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
			link: String,
			disabled: {
				type: Boolean,
				default: false,
			}
		}
	}
</script>

<style scoped>
	a {
		color: white;
		text-decoration: none;
	}
</style>
