<template>
	<div>
		<!-- controls -->
		<div class="g g-af-c@m gap-2 items-end mb-2">
			<div>
				<div class="f12 f-white">spacer text</div>
				<button
					class="button"
					@click="bg.dark = !bg.dark"
					:class="{'is-active': bg.dark}"
				>dark background</button>
			</div>
			<button
				class="button"
				@click="bg.flickering = !bg.flickering"
				:class="{'is-active': bg.flickering}"
			>flickering background</button>
		</div>

		<!-- frame -->
		<div class="frame" :class="{'is-dark': bg.dark, 'is-flickering': bg.flickering}">
			<div class="full-absolute">
				<div>
					<img
						v-for="index in 48"
						:key="'lost' + index"
						src="@/assets/img/lost.png"
						alt="lost"
						class="img s-lost"
					/>
				</div>
				<div>
					<img
						v-for="index in 36"
						:key="'my' + index"
						src="@/assets/img/my.png"
						alt="my"
						class="img s-my"
					/>
				</div>
				<div>
					<img
						v-for="index in 16"
						:key="'controller' + index"
						src="@/assets/img/controller.png"
						alt="controller"
						class="img s-controller"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import gsap from 'gsap';

	export default {
		data() {
			return {
				bg: {
					dark: false,
					flickering: false,
				},
			};
		},
		methods: {
			timeline() {
				const tl = gsap
					.timeline({
						defaults: {
							opacity: 1,
							duration: 0.4,
							ease: 'power4.out',
						},
					})
					.fromTo(
						'.s-controller',
						{
							opacity: 0,
							y: 40,
						},
						{
							y: 0,
							stagger: 0.02,
							yoyo: true,
							repeat: -1,
						}
					)
					.fromTo(
						'.s-my',
						{
							opacity: 0,
							x: 'random(-100, 100)',
						},
						{
							stagger: 0.01,
							yoyo: true,
							duration: 0.6,
							repeat: -1,
							x: 0,
						}
					);

				const lost = () => {
					if (!document.body.contains(document.querySelector('.s-lost')))
						return;
					gsap.fromTo(
						'.s-lost',
						{
							opacity: 0,
						},
						{
							opacity: 1,
							duration: 0.4,
							ease: 'power4.out',
							stagger: 0.05,
							x: 'random(-50, 50)vw',
							y: 'random(-50, 50)vh',
							onComplete() {
								lost();
							},
						}
					);
				};
				lost();
			},
		},
		mounted() {
			this.timeline();
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';

	.s-controller {
		@for $i from 0 through 64 {
			&:nth-child(#{$i}) {
				top: 14% + ($i * 2.5);
				left: 3% + ($i * 2);
			}
		}
	}

	.s-my {
		@for $i from 0 through 64 {
			&:nth-child(#{$i}) {
				top: -10% + ($i * 3);
				left: 80%;
			}
		}
	}

	.s-lost {
		top: 50%;
		left: 50%;
	}
</style>