<template>
	<div>
		<div class="g g-af-c gap-2 items-end mb-2">
			<button
				class="button"
				@click="bgActive = !bgActive"
				:class="{'is-active': bgActive}"
			>flickering background</button>
		</div>
		<div class="s-frame" :class="{'is-flickering': bgActive}">
			<div class="full-absolute">
				<div>
					<img
						v-for="index in 32"
						:key="'lost' + index"
						src="@/assets/img/lost.png"
						alt="lost"
						class="img s-lost"
					/>
				</div>
				<div>
					<img
						v-for="index in 32"
						:key="'my' + index"
						src="@/assets/img/my.png"
						alt="my"
						class="img s-my"
					/>
				</div>
				<div>
					<img
						v-for="index in 32"
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
			timeline(obj, time) {
				gsap.fromTo(
					obj,
					{
						opacity: 0,
						x: 'random(0, 1800)',
						y: 'random(0, 1400)',
					},
					{
						opacity: 1,
						duration: `random(0.2, ${time})`,
						ease: 'elastic.inOut',
						stagger: 0.01,
						x: 'random(0, 1800)',
                        y: 'random(0, 1400)',
                        yoyo: true,
                        repeat: -1
					}
				);
			},
		},
		mounted() {
			this.timeline('.s-lost', 10);
			this.timeline('.s-my', 5);
			this.timeline('.s-controller', 15);
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';
</style>