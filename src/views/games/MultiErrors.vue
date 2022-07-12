<template>
	<GameLayout>
		<!-- Content -->
		<template #content>
			<div class="w-full h-5/6 flex border-2 border-space-green rounded-xl px-6 py-4">
				<div class="w-4/6 pr-10">
					<h3 class="geminis text-space-green text-xl">
						Corrige le code
					</h3>
					<p class="text-sm">
						Le script ci-dessous comporte une erreur cachée. Essaye de la corriger puis appuie sur "Tester" pour voir le résultat et passer à l'exercice suivant. Bonne chance !
					</p>
					<div class="mb-6 text-sm">
						<span>Progression: {{ exercise_number }}/10</span>
						<div class="progress mt-1">
							<div
								class="bg-space-green"
								role="progressbar"
								:style="'width: ' + (exercise_number * 10) + '%'"
							/>
						</div>
					</div>
					<div
						id="editor-1"
						class="lg:h-3/6 2xl:h-4/6 overflow-y-hidden"
						@click="onIdeClick"
					/>
					<div class="w-full flex flex-col mt-2">
						<div class="w-full bg-space-dark h-20 px-4 py-2">
							<span>Console de sortie :</span><br>
							<span class="output-result">{{ output }}</span>
						</div>
						<div
							class="text-center bg-white rounded-full font-bold px-4 py-1 text-space-dark-blue shadow-space w-3/5 xl:w-1/5 mt-2 ml-2 cursor-pointer"
							@click="executeCode"
						>
							TESTER
						</div>
					</div>
				</div>
				<div class="w-2/6">
					<h3 class="geminis text-space-green text-xl">
						Ton adversaire: Player 2
					</h3>
					<div class="mb-2 text-sm">
						<span>Progression de ton adversaire: {{ opponent_exercise_number }}/10</span>
						<div class="progress mt-1">
							<div
								class="bg-space-green"
								role="progressbar"
								:style="'width: ' + (opponent_exercise_number * 10) + '%'"
							/>
						</div>
					</div>
					<div 
						id="editor-2"
						class="h-2/6 overflow-y-hidden mt-4 w-full"
					/>
					<img
						src="@/assets/images/games/astronaut.png"
						alt="Astronaut"
						class="w-full mt-10"
					>
				</div>
			</div>
		</template>

		<!-- Sidebar -->
		<template #sidebar>
			<div class="w-10/12 flex justify-around items-center">
				<span
					v-if="user"
					class="geminis text-space-green text-2xl"
				>{{ user.username }}</span>
				<div class="w-full flex justify-center">
					<img
						src="@/assets/images/games/user05.png"
						alt="Photo de profil"
						class="w-20 h-20 rounded-full"
					>
				</div>
			</div>
			<SpaceButton
				text="Quitter la partie"
				link="home"
				width="small"
				class="w-4/5 mt-10 mb-14"
			/>
			<div class="w-full flex flex-col lg:px-2 xl:px-8">
				<div class="flex justify-between items-center mb-4">
					<a
						href="#"
						class="geminis text-space-dark-blue no-underline lg:text-lg xl:text-xl 2xl:text-4xl mt-1"
					>Space Odity</a>
					<div class="bg-space-dark-blue rounded-full w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 flex justify-center items-center">
						<img
							class="w-1/2"
							src="@/assets/images/games/space-icon.png"
							alt="Dashboard"
						>
					</div>
				</div>
				<div class="flex justify-between items-center mb-4">
					<a
						class="geminis text-space-green no-underline lg:text-lg xl:text-xl 2xl:text-4xl mt-1"
						href="#"
					>Space games</a>
					<div class="bg-space-green rounded-full w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 flex justify-center items-center">
						<img
							class="w-1/2"
							src="@/assets/images/games/code-icon.png"
							alt="Space games"
						>
					</div>
				</div>
				<div class="flex justify-between items-center mb-4">
					<a
						href="#"
						class="geminis text-space-dark-blue no-underline lg:text-lg xl:text-xl 2xl:text-4xl mt-1"
					>Paramètres</a>
					<div class="bg-space-dark-blue rounded-full w-8 h-8 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 flex justify-center items-center">
						<img
							class="w-1/2"
							src="@/assets/images/games/params-icon.png"
							alt="Paramètres"
						>
					</div>
				</div>
			</div>
			<div class="w-full lg:px-2 xl:px-8 mt-4">
				<h5 class="geminis text-space-green lg:text-lg xl:text-xl 2xl:text-4xl w-full text-left">
					Badges
				</h5>
				<div class="w-full flex justify-between flex-wrap">
					<div class="rounded-full bg-space-dark-blue w-6 xl:w-8 h-6 xl:h-8 2xl:w-12 2xl:h-12" />
					<div class="rounded-full bg-space-dark-blue w-6 xl:w-8 h-6 xl:h-8 2xl:w-12 2xl:h-12" />
					<div class="rounded-full bg-space-dark-blue w-6 xl:w-8 h-6 xl:h-8 2xl:w-12 2xl:h-12" />
					<div class="rounded-full bg-space-dark-blue w-6 xl:w-8 h-6 xl:h-8 2xl:w-12 2xl:h-12" />
					<div class="rounded-full bg-space-dark-blue w-6 xl:w-8 h-6 xl:h-8 2xl:w-12 2xl:h-12" />
					<div class="rounded-full bg-space-dark-blue w-6 xl:w-8 h-6 xl:h-8 2xl:w-12 2xl:h-12" />
				</div>
			</div>
		</template>
	</GameLayout>
</template>

<script>
    import GameLayout from '@/layouts/GameLayout'
    import SpaceButton from '@/components/SpaceButton'
    import $ from 'jquery'
    import router from "../../router";
    import exercices from '../../../exercices/errors'
    import loader from "@monaco-editor/loader";
    import * as MonacoCollabExt from "@convergencelabs/monaco-collab-ext";
    import axios from 'axios'

    export default {
        name: 'MultiErrors',
        components: {
            GameLayout,
            SpaceButton
        },
        data() {
            return {
                language: 'javascript',
                userEditor: null,
                opponentEditor: null,
                output: null,
                loading: false,

                user: null,
                room: null,

                exercise_number: 0,
                opponent_exercise_number: 0,

                /** Variables pour le partage des IDEs */
                userRemoteCursorManager: null,
                opponentRemoteCursorManager: null,
                userEditorContentManager: null,
                opponentEditorContentManager: null,
            }
        },
        watch: {
            async exercise_number(newVal) {

                await axios.patch(
                    process.env.VUE_APP_API_URL + `team/${this.user.team.id}/add-point`,
                    {
                      points: newVal
                    }
                ).then(res => res.data)
                .catch(error => console.warn('Warning: ', error));

                // Emit exercise number
                this.$socket.client.emit('nextExercise', {
                    pin: this.$route.params.pin
                });

                if(newVal <= 9) {
                    // Next exercise
                    this.userEditor.getModel().setValue(exercices[newVal].code);
                    this.output = null;
                    this.loading = false;
                } else {
                    // Success page
                    await router.push({path: `/room-win`});
                }
            },
            async opponent_exercise_number(newVal) {
                if(newVal <= 9) {
                    // Next exercise for opponent
                    this.opponentEditor.getModel().setValue(exercices[newVal].code);
                } else {
                    // Loose page
                    await router.push({ path: `/room-lose` });
                }
            }
        },
        async mounted() {
            document.title = 'Corrige le code | DotCode'

            // Get user
            const userId = parseInt(localStorage.getItem('user'));
            this.user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId)
                .then(res => res.data)
                .catch(() => this.$router.push({ name: 'room.connection' }));

            // Get room
            this.room = await axios.get(`${process.env.VUE_APP_API_URL}room/pin/${this.$route.params.pin}`)
                .then(res => res.data)
                .catch(() => this.$router.push({ name: 'room.connection' }));

            const userTeam = this.room.teams.find(team => team.id === this.user.team.id);
            const opponentTeam = this.room.teams.find(team => team.id !== this.user.team.id);

            // Initialization of the team number, in case of reloading
            this.exercise_number = userTeam.points;
            this.opponent_exercise_number = opponentTeam.points;

            // Init Monaco
            const monaco = await loader.init()
            // Create editors
            this.userEditor = monaco.editor.create(document.getElementById("editor-1"), {
                value: exercices[userTeam.points].code,
                language: this.language,
                theme: 'vs-dark',
                minimap: {enabled: false}
            });
            this.opponentEditor = monaco.editor.create(document.getElementById("editor-2"), {
                value: exercices[opponentTeam.points].code,
                language: this.language,
                theme: 'vs-dark',
                lineNumbers: false,
                minimap: {enabled: false}
            });

            // Cursor management
            this.userRemoteCursorManager = new MonacoCollabExt.RemoteCursorManager({
                editor: this.userEditor,
                tooltips: true,
                tooltipDuration: 4
            });
            this.opponentRemoteCursorManager = new MonacoCollabExt.RemoteCursorManager({
                editor: this.opponentEditor,
                tooltips: true,
                tooltipDuration: 4
            });
            // Create cursors
            userTeam.users.forEach(user => {
                // Don't create for this user
                if (user.id === this.user.id) {
                    return;
                }
                // Add cursor
                const newCursor = this.userRemoteCursorManager.addCursor(
                    user.id.toString(),
                    this.getRandomColor(),
                    user.pseudo
                );
                newCursor.setPosition({column: 1, lineNumber: 1});
                newCursor.show();
                // Add to user
                this.room.users.find(u => u.id === user.id ).cursor = newCursor;
            });

            opponentTeam.users.forEach(user => {
                // Add cursor
                const newCursor = this.opponentRemoteCursorManager.addCursor(
                    user.id.toString(),
                    this.getRandomColor(),
                    user.pseudo
                );
                newCursor.setPosition({column: 1, lineNumber: 1});
                newCursor.show();
                // Add to user
                this.room.users.find(u => u.id === user.id).cursor = newCursor;
            });

            // Editor content managers
            const vm = this;
            this.userEditorContentManager = new MonacoCollabExt.EditorContentManager({
                editor: this.userEditor,
                onInsert(index, text) {
                    vm.$socket.client.emit('newTextInsert', {
                        index: index,
                        text: text,
                        team_id: vm.user.team.id,
                        pin: vm.$route.params.pin
                    });
                },
                onDelete(index, length) {
                    vm.$socket.client.emit('newTextDelete', {
                        index: index,
                        length: length,
                        team_id: vm.user.team.id,
                        pin: vm.$route.params.pin
                    });
                }
            });
            this.opponentEditorContentManager = new MonacoCollabExt.EditorContentManager({
                editor: this.opponentEditor,
            });

            // IDE on key up
            this.userEditor.onKeyUp((e) => {
                if (e.code === 'Tab') {
                    this.$socket.client.emit('onTab', {
                        text: this.userEditor.getValue(),
                        team_id: this.user.team.id,
                        pin: this.$route.params.pin
                    });
                }
                this.$socket.client.emit('userCursorChange', {
                    pin: this.$route.params.pin,
                    user: this.user,
                    position: this.userEditor.getPosition()
                });
            });
        },
        methods: {
            executeCode() {
                if(!this.loading) {
                    $.ajax({
                        url: process.env.VUE_APP_API_URL + 'editor',
                        method: 'POST',
                        data: {
                            language: this.language,
                            code: this.userEditor.getModel().getValue(),
                            expectedResult: exercices[this.exercise_number].expectedResult,
                            expectedCode: exercices[this.exercise_number].expectedCode
                        },
                        success: (res) => {
                            if(res.error) {
                                // Display error
                                $('.output-result').css('color', 'red');
                                this.output = res.error;
                            } else {
                                // Display result
                                $('.output-result').css('color', '#fff');
                                this.output = res.output;
                                this.loading = true;

                                // Next exercice
                                setTimeout(() => {
                                    this.exercise_number++;
                                }, 1500);
                            }
                        }
                    });
                }
            },

            onIdeClick() {
                this.$socket.client.emit('userCursorChange', {
                    pin: this.$route.params.pin,
                    user: this.user,
                    position: this.userEditor.getPosition()
                });
            },

            getRandomColor() {
                return '#' + Math.floor(Math.random()*16777215).toString(16);
            }
        },

        sockets: {
            userCursorChange(params) {
                this.room.users.find(user => user.id === params.user.id).cursor.setPosition(params.position);
                this.room.users.find(user => user.id === params.user.id).cursor.show();
            },

            newTextInsert(params) {
                if (this.user.team.id === params.team_id) {
                    this.userEditorContentManager.insert(params.index, params.text);
                    this.userEditorContentManager.dispose();
                } else {
                    this.opponentEditorContentManager.insert(params.index, params.text);
                    this.opponentEditorContentManager.dispose();
                }
            },

            newTextDelete(params) {
                if (this.user.team.id === params.team_id) {
                    this.userEditorContentManager.delete(params.index, params.length);
                    this.userEditorContentManager.dispose();
                } else {
                    this.opponentEditorContentManager.delete(params.index, params.length);
                    this.opponentEditorContentManager.dispose();
                }
            },

            onTab(params) {
                if (this.user.team.id === params.team_id) {
                    this.userEditor.setValue(params.text);
                } else {
                    this.opponentEditor.setValue(params.text);
                }
            },

            opponentSuccess() {
                this.opponent_exercise_number++;
            }
        }
    }
</script>

<style scoped>
    .output-result::before {
        content: '> ';
    }
    #editor-2 {
        filter: blur(3px);
    }
</style>
