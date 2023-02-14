<template>
	<div></div>
</template>

<script setup>
	definePageMeta({
		title: 'Home',
		// set the layout for this page, here we use the default layout but you can also use a custom layout
		layout: 'default',
	});

	const { data, pending, error, refresh } = await useAsyncData(
		('categories',
		() => {
			const store = usePinia();
			return $fetch('https://api.publicapis.org/categories');
		})
	);
</script>
