<template>
    <AuthentificationLayout>
        <template #background-image>
            <img src="~@/assets/images/planet-ice.png">
        </template>
        <template #text-page>
            <p class="geminis text-9xl text-shadow text-end">
                WELCOME ON BOARD !
            </p>
        </template>
        <template #form>
            <p class="geminis text-space-green text-3xl text-center">CREER UN COMPTE</p>
            <RegisterForm />
        </template>
    </AuthentificationLayout>
</template>

<script>
import RegisterForm from '../../components/Profil/RegisterForm.vue'
import AuthentificationLayout from "../../layouts/partials/authentification-layout/AuthentificationLayout";
export default {
    name : "Register",
    components: {AuthentificationLayout, RegisterForm }
}
</script>
