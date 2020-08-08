<template>
	<div class="s-frame">
		<div class="full-absolute">
			<div>
				<img
					v-for="index in 48"
					:key="'lost' + index"
					src="@/assets/img/lost.png"
					alt="lost"
					class="img s-lost-2"
				/>
			</div>
			<div>
				<img
					v-for="index in 36"
					:key="'my' + index"
					src="@/assets/img/my.png"
					alt="my"
					class="img s-my-2"
				/>
			</div>
			<div>
				<img
					v-for="index in 16"
					:key="'controller' + index"
					src="@/assets/img/controller.png"
					alt="controller"
					class="img s-controller-2"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import gsap from 'gsap';

	export default {
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
						'.s-controller-2',
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
						'.s-my-2',
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
						!document.body.contains(document.querySelector('.s-lost-2'))
					)
						return;
					gsap.fromTo(
						'.s-lost-2',
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

	.s-my-2 {
		width: 70%;
		top: 20%;
		right: 10%;
	}

	.s-lost-2 {
		bottom: 0;
		right: 0;
	}
</style>