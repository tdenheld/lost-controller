<template>
	<div class="s-frame"></div>
</template>

<script>
	import gsap from 'gsap';
	export default {
		mounted() {
			gsap.timeline({});
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';

	.s-frame {
		padding-bottom: 56.25%;
		border: 1px solid $dark;
	}
</style>