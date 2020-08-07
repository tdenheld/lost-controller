<template>
	<div>
		<div>
			<img v-for="index in 36" :key="'my' + index" src="@/assets/img/my.png" alt="my" class="img s-my" />
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
</template>

<script>
	import gsap from 'gsap';
	export default {
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
							y: 30,
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
							x: -30,
						},
						{
							stagger: 0.01,
							yoyo: true,
							repeat: -1,
							x: 0,
						}
					);
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
				top: 10% + ($i * 2.5);
				left: 10% + ($i * 2);
			}
		}
	}

	.s-my {
		@for $i from 0 through 64 {
			&:nth-child(#{$i}) {
				top: -10% + ($i * 3);
				left: 30%;
			}
		}
	}
</style>