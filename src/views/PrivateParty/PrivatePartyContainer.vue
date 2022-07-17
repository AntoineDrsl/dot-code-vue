<template>
	<private-layout>
		<template #content>
			<router-view />
		</template>
	</private-layout>
</template>

<script>
import PrivateLayout from '../../layouts/PrivateLayout.vue'
export default {
 name : 'PrivatePartyContainer',
  components: { PrivateLayout }
}
</script>

<style>

</style>