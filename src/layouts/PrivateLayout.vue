<template>
  <div>
        <div class="w-full flex justify-center px-4 h-16 mt-4">
            <img src="@/assets/images/SpaceCodeGreenLogo.png" />
        </div>
        <img src="@/assets/images/Moon.png" class="-mt- font-image w-1/4 ml-10 opacity-70 relative z-10" />
        <div class="-mt-80">
            <slot name="content"></slot>
        </div>
        
        
  </div>
</template>

<script>
export default {
    name : 'PrivateLayout',
}
</script>

<style scoped>
</style>