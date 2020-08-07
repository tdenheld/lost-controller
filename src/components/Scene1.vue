<template>
	<div ref="frame">
	</div>
</template>

<script>
	import gsap from 'gsap';
	export default {
		methods: {
			trail() {
                const vm = this;
				window.addEventListener(
					'mousemove',
					(e) => {
						[1, 0.9, 0.8, 0.5, 0.1].forEach((i) => {
							var j = (1 - i) * 10;
							var elem = document.createElement('div');
							elem.className = 'trail';
							elem.style.top =
								e.pageY +
								Math.round(Math.random() * j - j / 2) +
								'px';
							elem.style.left =
								e.pageX +
								Math.round(Math.random() * j - j / 2) +
								'px';
							vm.$refs.frame.appendChild(elem);
							window.setTimeout(function () {
								vm.$refs.frame.removeChild(elem);
							}, Math.round(Math.random() * i * 1500));
						});
					},
					false
				);
			},
		},
		mounted() {
			this.trail();
		},
		destroyed() {},
	};
</script>

<style lang="scss">
	@import '@/assets/sass/_settings-tools.scss';

	.trail {
		position: absolute;
		width: 5%;
		height: 5%;
		background-image: url('../assets/img/lost.png');
		background-repeat: no-repeat;
		background-size: contain;
		pointer-events: none;
	}
</style>