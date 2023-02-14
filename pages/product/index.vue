<template>
	<div>
		<list />
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();
	const router = useRouter();

	if (!route.query.page) {
		router.push({ query: { page: 1 } });
	}
	useAsyncData('productList', async () => {
		const store = useCategoryStore();
		store.page = Number(route.query.page);
		await store.fetchCategories();
	});
</script>
