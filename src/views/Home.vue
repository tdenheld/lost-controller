<template>
	<div>
		<header class="pv-8">
			<h1 class="f40 f80@ml lh-solid ls-heading">freek fabricius</h1>
			<h2 class="f20 f40@ml lh-title ls-heading">lost my controller</h2>
		</header>

		<h3 class="fw-b">scenes</h3>
		<hr class="mb-3" />
		<div class="mb-1">
			<div v-for="index in 4" :key="index">
                <router-link :to="{path: '/scenes/scene-' + index}">scene {{ index }}</router-link>
            </div>
		</div>
	</div>
</template>