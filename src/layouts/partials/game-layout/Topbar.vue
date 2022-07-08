<template>
	<div class="w-full flex justify-between items-center h-24">
		<div class="text-xl geminis">
			Welcome to your space games !
		</div>

    <div>
      <img
          class="btn-moon"
          src="@/assets/images/btn-moon.svg"
          alt="Moon button"
          @click="openSideBar"
      >
    </div>
	</div>
</template>

<script>
    export default {
        name: 'Topbar',
        data() {
          return {
            opened: false
          }
        },

        methods: {
          openSideBar() {
            this.opened = !this.opened;
            this.$emit('open-sidebar', this.opened);
          }
        }
    }
</script>

<style scoped>
  .btn-moon {
    width: 30%;
    margin-left: 40px;
    cursor: pointer;
  }
</style>
