<template>
	<div class="container">
		<nav class="pt-8 pb-4" v-if="$route.name !== 'Home'">
			<router-link to="/">index</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
	@import '/assets/sass/style.scss';
</style>