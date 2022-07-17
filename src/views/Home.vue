<template>
	<HomeLayout>
		<template #content>
			<div class="relative h-96 lg:h-screen mb-10 top-28 xl:top-14 2xl:top-96">
				<div class="w-2/3 lg:w-1/2 2xl:w-3/5 mt-24 float-right text-center ">
					<h1 class="lg:text-8xl 2xl:text-9xl geminis text-loose text-shadow mb-14">
						Welcome<br>on board !
					</h1>
					<div class="flex space-x-2">
						<div class="w-full lg:w-1/2">
							<SpaceButton
								text="Jouer en ligne !"
								link="room.connection"
							/>
						</div>
						<div class="w-full lg:w-1/2">
							<SpaceButton
								text="Créer une partie privée"
								@click.native="createRoom"
							/>
						</div>
					</div>
				</div>
				<div class="top-14 h-5/6 w-5/6 bg-no-repeat bg-contain bg-astronaute" />
			</div>
			<div class="space-y-24 mt-4">
				<div class="relative h-80 flex items-center">
					<div class="lg:w-3/5">
						<h2 class="geminis">
							Third Stone from the Sun
						</h2>
						<p class="w-3/5 lg:w-full">
							<strong>SPACECODE, c'est quoi ?</strong> <br>
							Relevez le défi sur les différents modes de jeux que vous propose SPACECODE. Chaque défi est conçu par la
							communauté pour vous aider à renforcer différentes compétences de développement. Maîtrisez le langage de
							votre choix et développez votre compréhension du code. Résolvez le défi avec votre style de développement
							directement dans le navigateur et résolvez des exercices pour mesurer votre progression. SPACECODE vous
							propose une approche nouvelle, créative et optimisée pour tirer le meilleur parti de votre pratique de la
							programmation.
						</p>
					</div>
					<div>
						<img
							src="@/assets/images/planet-red.png"
							alt="planet-red"
							class="planet-red-img top-4 xl:top-0 -ml-14 lg:ml-28 absolute w-1/4 2xl:w-1/5 2xl:ml-96 2xl:-mt-8"
						>
						<img
							src="@/assets/images/diamond.png"
							alt="diamonds"
							class="diamond-img absolute w-1/12 right-44 xl:right-80 xl:bottom-0"
						>
						<img
							src="@/assets/images/diamond-2.png"
							alt="diamonds"
							class="diamond-img-2 right-6 xl:right-11 absolute w-1/12 -top-10"
						>
					</div>
				</div>

				<div class="relative h-80 flex items-center justify-end">
					<div class="lg:w-3/5 text-right">
						<h2 class="geminis">
							Interstellar Supernova
						</h2>
						<p class="w-3/5 lg:w-full ml-56 lg:ml-0">
							<strong> Comment ça fonctionne ? </strong> <br>

							Discutez du défi, des meilleures pratiques et des techniques innovantes avec la communauté. Laissez-vous
							surprendre par la façon dont les autres abordent le même problème que vous. Créez des mini-jeux qui se
							concentrent sur vos connaissances et permettez aux autres de s’entraîner. Défiez la communauté avec vos
							idées et votre compréhension du code. Vous pouvez tout créer : des exercices simples comme des défis qui
							repoussent les limites de votre créativité. Embarquez au sein du vaisseau SPACECODE et devenez le meilleur !
						</p>
					</div>
					<div>
						<img
							src="@/assets/images/diamond-2.png"
							alt="diamonds"
							class="diamond-img-earth absolute w-1/12 left-64 xl:left-96"
						>
						<img
							src="@/assets/images/planet-earth.png"
							alt="planet-earth"
							class="planet-earth-img top-8 xl:top-0 left-20 xl:left-24 absolute w-1/4 2xl:w-1/5 2xl:-top-24"
						>
						<img
							src="@/assets/images/diamond-5.png"
							alt="diamonds"
							class="diamond-img-earth-2 absolute w-1/12 left-64 xl:left-96 top-4"
						>
					</div>
				</div>

				<div class="relative h-80 flex items-center py-56 lg:py-24">
					<div class="w-3/5">
						<h2 class="geminis">
							FIGHT LIKE A Rocket Man !
						</h2>
						<p>
							<strong>Ce que propose SPACECODE ?</strong> <br>

							SPACECODE est avant tout un endroit pour apprendre, s'entraider avec une communauté importante de
							joueurs/développeurs, mais c'est aussi et surtout un espace de compétition et de coopération ! <br>

							<strong>En mode Collaboration : </strong> <br>
							Choisissez votre équipe et votre langage et résolvez des exercices de développement. Un classement mensuel
							des meilleures équipes sera mis en avant sur le Dashboard et vous serez invités à participer à nos finales
							mondiales virtuelles. <br>

							<strong>En mode Compétition : </strong> <br>
							C'est dans cet espace-temps que les programmeurs de tous niveaux mettent leurs compétences à l'épreuve. Les
							concurrents se frayent un chemin à travers une série de puzzles en ligne pour remporter le titre de
							champion.
						</p>
					</div>
					<div>
						<img
							src="@/assets/images/diamond-2.png"
							alt="diamonds"
							class="diamond-img-egg absolute w-1/12 right-0 xl:right-8 top-4"
						>
						<img
							src="@/assets/images/diamond-3.png"
							alt="diamonds"
							class="diamond-img-egg-2 absolute w-1/12 right-0 top-36"
						>
						<img
							src="@/assets/images/planet-egg.png"
							alt="planet-egg"
							class="planet-egg-img top-0 ml-16 xl:ml-20 absolute w-1/4 2xl:w-1/5"
						>
					</div>
				</div>
			</div>



			<div class="w-full bg-white h-60 rounded-full relative mt-60">
				<div class="flex flex-column w-full items-center space-y-4">
					<h3 class="geminis text-space-dark-blue mt-10 lg:text-3xl xl:text-5xl">
						Prêt à rejoindre l'aventure ?
					</h3>
					<h4 class="geminis text-space-dark-blue lg:text-xl xl:text-3xl">
						L'espace a besoin de toi !
					</h4>
					<SpaceButton
						text="Se créer un compte"
						class="w-1/3"
					/>
				</div>
				<img
					src="@/assets/images/splash.png"
					alt="Splash"
					class="absolute -top-6 xl:-top-10 -left-6 xl:-left-16 w-1/4 2xl:w-1/6"
				>
				<img
					src="@/assets/images/diamond.png"
					alt="Diamond"
					class="diamond absolute w-1/5 right-0 top-28"
				>
			</div>

			<div class="w-full grid justify-items-center">
				<img
					src="@/assets/images/dotcode.png"
					alt="Dotcode"
				>
				<div class="geminis">
					Made with love by l'équipe 12
				</div>
				<div class="geminis">
					2022, Dotcode
				</div>
			</div>
		</template>
	</HomeLayout>
</template>

<script>
  import HomeLayout from "@/layouts/HomeLayout"
  import SpaceButton from "@/components/SpaceButton"
  import axios from 'axios'

  export default {
    name: "Home",
    components: {
      HomeLayout,
      SpaceButton,
    },
    mounted() {
      this.disconnectFromAll();
    },
    methods: {
      async getUser() {
        // Get user
        const userId = parseInt(localStorage.getItem('user'));
        this.user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data);
      },
      async createRoom() {
        const userId = parseInt(localStorage.getItem('user'));

        // Create room
        const room = await axios.post(process.env.VUE_APP_API_URL + 'room', {
          owner_id: userId
        }).then(res => res.data);

        // Join room
        await this.$socket.client.emit('joinRoom', {
          pin: room.pin
        });

        // Redirect
        return await this.$router.push({ name: 'room.pseudo', params: { pin: room.pin } });
      },
      async disconnectFromAll() {
        const userId = parseInt(localStorage.getItem('user'));
        if(userId) {
          await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId + '/disconnect');
        }
      }
    }
  };
</script>

<style>
  .bg-astronaute {
    background: url("~@/assets/images/welcome-on-board.png");
    z-index: -1;
  }

  .planet-red-img {
    animation-name: planet-movement;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: normal;
  }

  .diamond-img {
    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img-2 {
    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .planet-earth-img {
    animation-name: planet-movement;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: reverse;
  }

  .diamond-img-earth {
    transform: rotate(180deg);
    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img-earth-2 {
    transform: rotate(180deg);
    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .planet-egg-img {
    animation-name: planet-movement;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: normal;
  }

  .diamond-img-egg {
    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond-img-egg-2 {
    animation-name: diamond-movement;
    animation-duration: 5s;
    animation-delay: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .diamond {
    animation-name: diamond-movement;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes planet-movement {
    0% {
      transform: rotate(0) translate(0, 0);
    }
    50% {
      transform: rotate(180deg) translate(50px, -40px);
    }
    100% {
      transform: rotate(360deg) translate(0, 0);
    }
  }

  @keyframes diamond-movement {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
