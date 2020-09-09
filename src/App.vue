<template>
	<div class="container">
		<transition name="slide" appear mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<style lang="scss">
	@import '/assets/sass/style.scss';
</style>