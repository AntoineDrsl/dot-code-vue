<template>
    <div class="h-screen max-h-screen w-screen absolute top-0 left-0 bg-space-dark-blue bg-container">
        <!-- MENU -->
        <div class="h-full flex flex-col items-center justify-between py-5">
            <div class="flex flex-col justify-around items-center">
                <div class="close-container" @click="closeMenu">
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                </div>

                <img alt="spacecode_logo" class="w-24 mt-4" src="@/assets/images/SpaceCodeGreenLogo.png">
            </div>

            <div class="flex flex-col space-y-8 bg-white rounded-3xl w-25 text-center py-12 text-xl z-10">
                <router-link to="#">
                    <div class="link">
                        DECOUVRIR SPACECODE
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="link">
                        REGLES ET MODERATIONS
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="link">
                        QUI SOMMES NOUS ?
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="link">
                        NOUS REJOINDRE
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="link">
                        NOUS CONTACTER
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="link-btn btn-shadow">
                        NOUS SOUTENIR
                    </div>
                </router-link>
            </div>

            <div>
                <ul class="flex w-full list-none font-black text-space-green p-0 space-x-12">
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

        <!-- IMAGES BACKGROUND -->
        <img alt="metal planet" width="30%" class="planet-img" src="@/assets/images/planet-metal.png">
        <img alt="diamond" width="200" class="diamond-img-menu" src="@/assets/images/diamond-2.png">
    </div>
</template>
<script>
export default {
    name: "Menu",
    methods: {
        closeMenu() {
            this.$emit('close-menu');
        }
    }
}
</script>
<style scoped>
a {
    text-decoration: none;
}

.bg-container {
    background-image: url("~@/assets/images/stars-background.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.link {
    width: auto;
    position: relative;
    color: #090B31;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;
}

.link:hover {
    text-decoration: underline;
}

.link-btn {
    background-color: #44F5BA;
    border-radius: 1rem;
    color: #090B31;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;
    margin: auto 2rem;
    padding: 0.5rem 0;
    transition: 500ms;
}
.link-btn:hover {
    background-color: #090B31;
    color: #44F5BA;
}

.btn-shadow {
    box-shadow: 0 0 30px #30B5FF;
}

.close-container{
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.leftright{
    height: 3px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: white;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
}

.rightleft{
    height: 3px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: white;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
}

.close-container:hover .leftright{
    transform: rotate(-45deg);
    background-color: #22c790;
}
.close-container:hover .rightleft{
    transform: rotate(45deg);
    background-color: #22c790;
}

.planet-img {
    position: absolute;
    z-index: 11;
    top: 100px;
    left: 30px;
}

.diamond-img-menu {
    position: absolute;
    z-index: 11;
    top: 200px;
    right: 200px;
    transform: rotate(-50deg);
    filter: drop-shadow(0 0 0.25rem cyan);
}

</style>
