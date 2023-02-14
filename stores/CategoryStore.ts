import { defineStore } from 'pinia';
import { Category } from '../interfaces/category.interface';

export const useCategoryStore = defineStore('CategoryStore', {
	state: () => ({
		categories: [] as Category[],
		page: 1,
		limit: 8,
		total: 0,
	}),
	getters: {
		paginatedCategories: (state) => {
			const startIndex = (state.page - 1) * state.limit;
			const endIndex = state.page * state.limit;
			return state.categories.slice(startIndex, endIndex);
		},
	},
	actions: {
		async fetchCategories() {
			const response = await fetch('https://api.publicapis.org/categories');
			const data = await response.json();
			this.total = data.count;
			let index = 0;
			data.categories.forEach((category: string) => {
				this.categories.push({
					id: index,
					title: category,
					type: 'Categorie',
					location: 'Entrepot',
					department: 'D-U12',
					closeDateFull: '7 Janvier 2023',
				});
				index++;
			});
			// data.categories.forEach((category: string) => {
			// 	this.categories.push({
			// 		id: index,
			// 		title: category,
			// 		type: 'Categorie',
			// 		location: 'Entrepot',
			// 		department: 'D-U12',
			// 		closeDateFull: '7 Janvier 2023',
			// 	});
			// 	index++;
			// });
			// data.categories.forEach((category: string) => {
			// 	this.categories.push({
			// 		id: index,
			// 		title: category,
			// 		type: 'Categorie',
			// 		location: 'Entrepot',
			// 		department: 'D-U12',
			// 		closeDateFull: '7 Janvier 2023',
			// 	});
			// 	index++;
			// });
			// data.categories.forEach((category: string) => {
			// 	this.categories.push({
			// 		id: index,
			// 		title: category,
			// 		type: 'Categorie',
			// 		location: 'Entrepot',
			// 		department: 'D-U12',
			// 		closeDateFull: '7 Janvier 2023',
			// 	});
			// 	index++;
			// });
			this.total = this.categories.length;
		},
	},
});
