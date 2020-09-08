<template>
	<div>
		<div class="g g-af-c@m gap-2 items-end mb-2">
			<div>
				<label for="scale" class="db f12">scale random (%)</label>
				<input type="number" v-model="scale" class="input mxw-150" id="scale" />
			</div>
			<div>
				<label for="time" class="db f12">time random (sec)</label>
				<input type="number" v-model="time" class="input mxw-150" id="time" @change="initTimeline()" />
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
				<div v-for="(entry, key) in elements" :key="key">
					<img
						v-for="index in 32"
						:key="entry + index"
						:src="require(`@/assets/img/${entry}.png`)"
						:alt="entry"
						class="img"
						:class="'s-' + entry"
						:style="`height: ${$options.filters.getRandomInt(scale) + 3}%`"
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
				elements: ['lost', 'my', 'controller'],
			};
		},
		methods: {
			timeline(obj, time) {
				gsap.fromTo(
					obj,
					{
						opacity: 0,
						x: 'random(0, 90)vw',
						y: 'random(0, 90)vh',
					},
					{
						opacity: 1,
						duration: `random(0.2, ${time})`,
						ease: 'elastic.inOut',
						stagger: 0.01,
						x: 'random(0, 90)vw',
						y: 'random(0, 90)vh',
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