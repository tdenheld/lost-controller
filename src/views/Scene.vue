<template>
	<div>
		<h1 class="f40 mb-2">{{ $route.params.id | replace('-', ' ') }}</h1>
		<component v-bind:is="scene"></component>
	</div>
</template>

<script>
	import Scene1 from '@/components/Scene1.vue';

	export default {
		components: {
			Scene1,
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