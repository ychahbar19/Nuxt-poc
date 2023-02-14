<template>
	<nav
		class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
		aria-label="Pagination"
	>
		<div class="flex flex-1 justify-between sm:justify-end">
			<a
				@click="previousPage"
				class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				:class="{
					'cursor-not-allowed': !hasPreviousPage,
					'cursor-pointer': hasPreviousPage,
				}"
				>Précédent</a
			>
			<a
				@click="nextPage"
				class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				:class="{
					'cursor-not-allowed': !hasNextPage,
					'cursor-pointer': hasNextPage,
				}"
				>Suivant</a
			>
		</div>
	</nav>
</template>

<script setup lang="ts">
	const emit = defineEmits(['nextPage', 'previousPage']);
	const props = defineProps({
		page: {
			type: Number,
			required: true,
		},
		limit: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
	});

	const hasNextPage = computed(() => props.page < props.total / props.limit);
	const hasPreviousPage = computed(() => props.page > 1);

	const nextPage = () => {
		if (hasNextPage.value) {
			emit('nextPage', props.page + 1);
		}
	};

	const previousPage = () => {
		if (hasPreviousPage.value) {
			emit('previousPage', props.page - 1);
		}
	};
</script>
