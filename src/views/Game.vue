<template>
	<div>
		<div v-if="!room">
			Loading
		</div>
		<ErrorsVs 
			v-else-if="room.mode == 'vs'"
			:user="user"
			:room="room"
		/>
		<ErrorsMulti 
			v-else-if="room.mode == 'multi'"
			:user="user"
			:room="room"
		/>
	</div>
</template>

<script>
    import axios from 'axios'
	import ErrorsVs from '@/components/Games/ErrorsVs'
	import ErrorsMulti from '@/components/Games/ErrorsMulti'

	export default {
		name: 'Game',
		components: {
			ErrorsVs,
			ErrorsMulti,
		},
		data() {
			return {
				user: null,
				room: null,
			}
		},
		async mounted() {
			// Get user
			const userId = parseInt(localStorage.getItem('user'));
			this.user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId)
					.then(res => res.data)
					.catch(() => this.$router.push({ name: 'room.connection' }));

			// Get room
			this.room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.$route.params.pin}`)
					.then(res => res.data)
					.catch(() => this.$router.push({ name: 'room.connection' }));
		}
	}
</script>