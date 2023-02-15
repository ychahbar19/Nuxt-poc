<template>
	<div>
		<list
			v-if="!loading"
			:categories="paginatedCategories"
			:page="page"
			:limit="limit"
			:total="total"
			@next-page="goToNextPage"
			@previous-page="goToPreviousPage"
		/>
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();
	const store = useCategoryStore();
	const router = useRouter();
	const loading = ref(true);

	const { page, limit, total, paginatedCategories } = toRefs(store);

	if (!route.query.page) router.push({ query: { page: 1 } });

	useAsyncData('category', async () => {
		if (!store) return;
		store.page = Number(route.query.page || 1);
		await store.fetchCategories();
		loading.value = false;
	});

	// bonne pratique de ne pas muter les props dans les composants enfants
	const goToNextPage = () => {
		store.page++;
		router.push({ query: { page: store.page } });
	};

	const goToPreviousPage = () => {
		store.page--;
		router.push({ query: { page: store.page } });
	};
</script>
