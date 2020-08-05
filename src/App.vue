<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>|
			<router-link to="/scene">Scene</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
	@import '/assets/sass/style.scss';
</style>