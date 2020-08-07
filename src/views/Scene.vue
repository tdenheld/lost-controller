<template>
	<div class="pb-8">
		<h1 class="f40 mb-2">{{ $route.params.id | replace('-', ' ') }}</h1>
		<div class="s-frame">
            <component v-bind:is="scene" class="full-absolute"></component>
        </div>
	</div>
</template>

<script>
    import Scene1 from '@/components/Scene1.vue';
    import Scene2 from '@/components/Scene2.vue';

	export default {
		components: {
            Scene1,
            Scene2
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

	.s-frame {
        position: relative;
        // height: 51.3vw; // represents 16:9
        padding-bottom: 56.25%;
        overflow: hidden;
        border: 1px solid $dark;
	}
</style>