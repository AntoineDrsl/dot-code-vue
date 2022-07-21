<template>
	<AuthentificationLayout>
        <template #background-image>
            <img src="~@/assets/images/planet-ring.png">
        </template>
        <template #text-page>
            <p class="geminis text-9xl text-shadow text-end">
                WELCOME BACK !
            </p>
        </template>
        <template #form>
            <p class="geminis text-space-green text-3xl text-center">SE CONNECTER</p>
            <LoginForm />
            <ConnexionButton />
        </template>
	</AuthentificationLayout>
</template>

<script>
import AuthentificationLayout from "../../layouts/partials/authentification-layout/AuthentificationLayout";
import LoginForm from "../../components/Profil/LoginForm";
import ConnexionButton from "../../components/Profil/ConnexionButton";
export default {
    name : "Login",
    components: {
        ConnexionButton,
        LoginForm,
        AuthentificationLayout,
    }
}
</script>
