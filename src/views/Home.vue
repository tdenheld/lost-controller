<template>
	<div class="pb-8">
		<header class="pt-8 pb-8 pb-16@m">
			<h1 class="s-h1 mb-1">freek fabricius</h1>
			<h2 class="s-h2">lost my controller</h2>
		</header>

		<h3 class="s-h3 mb-4px">album cover animation generator</h3>
		<hr class="mb-2 mb-4@m" />

		<div v-for="index in 4" :key="index" class="mb-1">
			<router-link :to="{path: '/scenes/scene-' + index}" class="s-link">
				<span class="s-link__bg"></span>
				<span class="s-link__txt">scene {{ index }}</span>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/assets/sass/_settings-tools.scss';

	.s-h1 {
		font-weight: bold;
		line-height: $lh-solid;
		letter-spacing: $ls-heading;
		font-size: calc(12vw + 20px);
	}

	.s-h2 {
		font-weight: 200;
		line-height: $lh-title;
		letter-spacing: $ls-heading;
		font-size: calc(3vw + 16px);
	}

	.s-h3 {
		font-weight: 500;
		line-height: $lh-title;
		letter-spacing: $ls-heading;
		font-size: calc(0.5vw + 12px);
	}

	// --------------------
	.s-link {
		position: relative;
		line-height: $lh-title;
		letter-spacing: $ls-heading;
		font-size: calc(1.5vw + 16px);
		transition: $fade;

		&__bg {
			@include full(absolute);
			background-color: $dark;
			transform: scaleX(0);
			transform-origin: -10% 0;
			transition: $fade;
		}

		&__txt {
			position: relative;
			transition: $fade;
		}

		&:hover {
			.s-link__txt {
				color: $light;
			}

			.s-link__bg {
				transform: scaleX(1);
				transform-origin: 110% 0;
			}
		}
	}
</style>