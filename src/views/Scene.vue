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
	import Scene3 from '@/components/Scene3.vue';

	export default {
		components: {
			Scene1,
			Scene2,
			Scene3,
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

	@keyframes bg-color {
		0% {
			background-color: $white;
		}

		5% {
			background-color: $dark;
        }
        
        10% {
			background-color: $white;
        }
        
        15% {
			background-color: $dark;
		}

		80% {
			background-color: $white;
		}

		90% {
			background-color: $dark;
		}

		100% {
			background-color: $white;
		}
	}

	.s-frame {
		position: relative;
		padding-bottom: 56.25%;
		overflow: hidden;
		border: 1px solid $dark;
		animation: bg-color 500ms $ease-out infinite both;
	}
</style>