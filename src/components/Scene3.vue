<template>
	<div>
		<div class="g g-af-c gap-2 items-end mb-2">
			<button
				class="button"
				@click="bgActive = !bgActive"
				:class="{'is-active': bgActive}"
			>flickering background</button>
		</div>
		<div class="frame" :class="{'is-flickering': bgActive}">
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
				bgActive: false,
			};
		},
		methods: {
			timeline() {
				const tl = gsap
					.timeline({
						defaults: {
							duration: 1.4,
							ease: 'power4.out',
						},
					})
					.fromTo(
						'.s-controller',
						{
							y: 880,
						},
						{
							y: 0,
							stagger: 0.07,
							yoyo: true,
							repeat: -1,
						}
					)
					.fromTo(
						'.s-my',
						{
							y: 'random(-100, 100)',
							scale: 0.2,
						},
						{
							stagger: 0.04,
							yoyo: true,
							duration: 0.06,
							repeat: -1,
							y: 0,
							scale: 1,
						}
					);

				const lost = () => {
					if (
						!document.body.contains(document.querySelector('.s-lost'))
					)
						return;
					gsap.fromTo(
						'.s-lost',
						{
							opacity: 0,
						},
						{
							opacity: 1,
							scaleY: 'random(0.008, 1.5)',
							duration: 'random(0.008, 1.5)',
							ease: 'power4.out',
							stagger: 0.01,
							x: 'random(-1800, 0)',
							y: 'random(-1400, 0)',
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

	.s-my {
		width: 70%;
		top: 20%;
		right: 10%;
	}

	.s-lost {
		bottom: 0;
		right: 0;
	}
</style>