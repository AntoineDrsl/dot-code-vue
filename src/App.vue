<template>
	<div id="app">
        <Particles />
		<router-view />
	</div>
</template>

<style>
  #app {
    color: #FFF;
  }
</style>
<script>
import Particles from "./components/Particles/Particles";
export default {
  components: {Particles}
}
</script>
