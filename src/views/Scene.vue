<template>
	<div class="pb-8">
		<h1 class="f40 fw-b mb-2">{{ $route.params.id | replace('-', ' ') }}</h1>
		<component v-bind:is="scene"></component>
	</div>
</template>

<script>
	import Scene1 from '@/components/Scene1.vue';
	import Scene2 from '@/components/Scene2.vue';
	import Scene3 from '@/components/Scene3.vue';
    import Scene4 from '@/components/Scene4.vue';

	export default {
		components: {
			Scene1,
			Scene2,
			Scene3,
            Scene4,
		},
		computed: {
			scene() {
				return this.$options.filters.titleCase(
					this.$options.filters.replace(this.$route.params.id, '-', '')
				);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';
</style>