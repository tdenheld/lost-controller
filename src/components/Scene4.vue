<template>
	<div>
		<div class="g g-af-c gap-2 items-end mb-2">
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
				@click="bgActive = !bgActive"
				:class="{'is-active': bgActive}"
			>flickering background</button>
		</div>
		<div class="frame" :class="{'is-flickering': bgActive}">
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
				bgActive: false,
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
						repeat: -1,
					}
				);
			},
			initTimeline() {
				this.timeline('.s-lost', this.time);
				this.timeline('.s-my',this.time);
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