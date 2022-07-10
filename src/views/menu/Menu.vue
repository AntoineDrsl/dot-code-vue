<template>
        <div class="h-screen max-h-screen">
            <!-- IMAGES BACKGROUND -->
            <img alt="metal planet" width="500" class="planet-img" src="@/assets/images/planet-metal.png">
            <img alt="diamond" width="200" class="diamond-img" src="@/assets/images/diamond-2.png">

            <!-- MENU -->
            <div class="h-full flex flex-col items-center justify-content-between py-5">
                <img alt="spacecode_logo" class="w-24" src="@/assets/images/SpaceCodeGreenLogo.png"
                    @click="test">

                <div class="flex flex-col space-y-2 bg-white rounded-3xl w-25 text-center py-12 text-xl">
                    <div class="text-space-dark-blue font-bold cursor-pointer">
                        Connexion
                    </div>
                    <div class="text-space-dark-blue font-bold cursor-pointer">
                        Inscription
                    </div>
                </div>

                <div>
                    <ul class="flex w-full list-none font-bold text-space-green p-0 space-x-12">
                        <li>
                            <a href="#"><img src="@/assets/images/twitter.png"></a>
                        </li>
                        <li class="">
                            <a href="#"><img src="@/assets/images/facebook.png"></a>
                        </li>
                        <li class="">
                            <a href="#"><img src="@/assets/images/linkedin.png"></a>
                        </li>
                        <li class="">
                            <a href="#"><img src="@/assets/images/discord.png"></a>
                        </li>
                        <li class="">
                            <a href="#"><img src="@/assets/images/twitch.png"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: "Menu",
    methods: {
        test() {
            this.$emit('test')
        }
    }
}
</script>
<style scoped>

.planet-img {
    position: absolute;
    z-index: -1;
    top: 100px;
    left: 30px;
}

.diamond-img {
    position: absolute;
    z-index: -1;
    top: 200px;
    right: 200px;
    transform: rotate(-50deg);
    filter: drop-shadow(0 0 0.25rem cyan);
}

.menu-enter-active,
.menu-leave-active {
    transition: all 0.75s ease-out;
}

.menu-enter-to {
    position: absolute;
    right: 0;
}

.menu-enter-from {
    position: absolute;
    right: -100%;
}

.menu-leave-to {
    position: absolute;
    left: -100%;
}

.menu-leave-from {
    position: absolute;
    left: 0;
}
</style>
