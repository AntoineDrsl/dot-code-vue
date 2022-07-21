<template>
    <div
        id="Login"
        class="px-20">

        <SimpleTopBar />

        <div class="absolute w-2/5">
            <slot name="background-image" />
        </div>

        <div class="grid grid-cols-2 gap-x-16 mt-10">
            <div class="relative w-full flex flex-column items-end space-y-7">
                <div>
                    <!-- C'est très sale comment c'est fait
                    mais je ne sais pas comment surpasser le router-link avec un svg-->
                    <router-link :to="{name: 'home'}">
                        <div class="flex items-center text-white cursor-pointer font-bold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            RETOUR DANS LE CYBERSPACE
                        </div>
                    </router-link>
                </div>
                <div>
                    <slot name="text-page" />
                </div>
                <div>
                    <ul class="flex w-full list-none font-black text-space-green p-0 space-x-12">
                        <li>
                            <span>FOLLOW US</span>
                        </li>
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
            <div class="z-10 2xl:w-3/4">
                <slot name="form" />
            </div>
        </div>
    </div>
</template>
<script>
import SimpleTopBar from "../other-layout/SimpleTopBar";
export default {
    components: {SimpleTopBar}
}
</script>
<style scoped>
a {
    text-decoration: none;
}
</style>
