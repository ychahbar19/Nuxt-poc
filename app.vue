<template>
	<NuxtLayout :name="layout">
		<div
			v-if="loading"
			class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
		/>
		<NuxtPage class="mx-12 my-12 rounded shadow" />
	</NuxtLayout>
</template>

<script setup>
	const layout = ref('default');
	const nuxtApp = useNuxtApp();
	const loading = ref(false);
	nuxtApp.hook('page:start', () => {
		loading.value = true;
	});
	nuxtApp.hook('page:finish', () => {
		loading.value = false;
	});
</script>
