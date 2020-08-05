<template>
	<div>
		<h1 class="f40 mb-2">{{ $route.params.id | replace('-', ' ') }}</h1>
		<scene1></scene1>
	</div>
</template>

<script>
    import Scene1 from '@/components/Scene1.vue';
    
	export default {
		components: {
			Scene1,
		},
	};
</script>