<template>
	<div class="container">
		<nav class="pt-4">
			<router-link to="/">Home</router-link> |
			<router-link to="/scene">Scene</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
	@import '/assets/sass/style.scss';
</style>