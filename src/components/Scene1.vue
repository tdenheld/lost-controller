<template>
	<div>
		<div class="g g-af-c gap-2 items-end mb-2">
			<div>
				<label for="scatterTrail" class="db f12">scatter trail (px: 0 - 999)</label>
				<input type="number" v-model="scatterTrail" class="input mxw-150" id="scatterTrail" />
			</div>
			<div>
				<label for="timeAfter" class="db f12">time after (ms: 0 - 99999)</label>
				<input type="number" v-model="timeAfter" class="input mxw-150" id="timeAfter" />
			</div>

			<button
				class="button"
				@click="bgActive = !bgActive"
				:class="{'is-active': bgActive}"
			>flickering background</button>
		</div>
		<div class="s-frame" :class="{'is-flickering': bgActive}" style="cursor: none">
			<div class="full-absolute">
				<div ref="frame"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				scatterTrail: 8,
				timeAfter: 100,
				bgActive: false,
			};
		},
		methods: {
			trail(e) {
				const vm = this;

				[7, 0.9, 0.8, 0.5, 0.1].forEach((i) => {
					const j = (1 - i) * this.scatterTrail;
					const elem = document.createElement('div');
					elem.className = 'trail';

					setTimeout(() => {
						elem.classList.add('is-lost');
					}, this.timeAfter * 0.5 + 200);
					setTimeout(() => {
						elem.classList.add('is-controller');
                    }, this.timeAfter * 0.35 + 500);
                    setTimeout(() => {
						elem.classList.add('is-my');
					}, this.timeAfter * 0.25 + 800);

					elem.style.top =
						e.pageY + Math.round(Math.random() * j - j / 2) + 'px';

					elem.style.left =
						e.pageX + Math.round(Math.random() * j - j / 2) + 'px';

					vm.$refs.frame.appendChild(elem);

					setTimeout(() => {
						if (document.body.contains(vm.$refs.frame)) {
							vm.$refs.frame.removeChild(elem);
						}
					}, Math.round(Math.random() * i * this.timeAfter) + 500);
				});
			},
		},
		created() {
			window.addEventListener('mousemove', this.trail);
		},
		destroyed() {
			window.removeEventListener('mousemove', this.trail);
		},
	};
</script>

<style lang="scss">
	@import '@/assets/sass/_settings-tools.scss';

	.trail {
		position: absolute;
		width: 18%;
		height: 8%;
		pointer-events: none;

		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			top: -220px;
			left: -60px;
			background-image: url('../assets/img/lost-controller.gif');
			background-repeat: no-repeat;
			background-size: contain;
        }
        
        &.is-lost {
			width: 8%;

			&:after {
				background-image: url('../assets/img/lost.png');
			}
		}

		&.is-controller {
			width: 18%;

			&:after {
				background-image: url('../assets/img/controller.png');
			}
		}

		&.is-my {
			width: 7%;

			&:after {
				background-image: url('../assets/img/my.png');
			}
		}
	}

	@keyframes bg-color {
		0% {
			background-color: $white;
		}
		5% {
			background-color: $dark;
		}
		10% {
			background-color: $white;
		}
		15% {
			background-color: $dark;
		}
		80% {
			background-color: $white;
		}
		90% {
			background-color: $dark;
		}
	}

	.s-frame {
		position: relative;
		padding-bottom: 56.25%;
		overflow: hidden;
		border: 1px solid $dark;

		&.is-flickering {
			animation: bg-color 500ms $ease-out infinite both;
		}
	}
</style>