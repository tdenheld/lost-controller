<template>
	<div>
		<div class="g g-af-c@m gap-2 items-end mb-2">
			<div>
				<label for="scale" class="db f12">scale random (%)</label>
				<input type="number" v-model="scale" class="input mxw-100" id="scale" />
			</div>
			<div>
				<label for="time" class="db f12">time random (sec)</label>
				<input type="number" v-model="time" class="input mxw-100" id="time" @change="initTimeline()" />
			</div>
			<button
				class="button"
				@click="bg.dark = !bg.dark"
				:class="{'is-active': bg.dark}"
			>dark background</button>
			<button
				class="button"
				@click="bg.flickering = !bg.flickering"
				:class="{'is-active': bg.flickering}"
			>flickering background</button>
		</div>
		<div class="frame" :class="{'is-dark': bg.dark, 'is-flickering': bg.flickering}">
			<div class="full-absolute">
				<div>
					<img
						v-for="index in 32"
						:key="'lost' + index"
						src="@/assets/img/lost.png"
						alt="lost"
						class="img s-lost"
						:style="`height: ${Math.round(Math.random(scale, scale + 3) * 10)}%`"
					/>
				</div>
				<div>
					<img
						v-for="index in 32"
						:key="'my' + index"
						src="@/assets/img/my.png"
						alt="my"
						class="img s-my"
						:style="`height: ${Math.round(Math.random(scale, scale + 3) * 10)}%`"
					/>
				</div>
				<div>
					<img
						v-for="index in 32"
						:key="'controller' + index"
						src="@/assets/img/controller.png"
						alt="controller"
						class="img s-controller"
						:style="`height: ${Math.round(Math.random(scale, scale + 3) * 10)}%`"
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
				scale: 6,
				time: 8,
			};
		},
		methods: {
			timeline(obj, time) {
				gsap.fromTo(
					obj,
					{
						opacity: 0,
						x: 'random(0, 100)vw',
						y: 'random(0, 100)vh',
					},
					{
						opacity: 1,
						duration: `random(0.2, ${time})`,
						ease: 'elastic.inOut',
						stagger: 0.01,
						x: 'random(0, 100)vw',
						y: 'random(0, 100)vh',
						yoyo: true,
						repeat: -1,
					}
				);
			},
			initTimeline() {
				this.timeline('.s-lost', this.time);
				this.timeline('.s-my', this.time);
				this.timeline('.s-controller', this.time);
			},
		},
		mounted() {
			this.initTimeline();
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';
</style>