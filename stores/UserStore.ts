import { defineStore } from 'pinia';
import { User } from '../interfaces/user.interface';

export const useUserStore = defineStore('UserStore', {
	state: () => ({
		user: {} as User,
		isLoggedIn: false,
	}),
	getters: {
		getUser: (state) => {
			return state.user;
		},
		getUserStatus: (state) => {
			return state.isLoggedIn;
		},
	},
	actions: {
		async login(email: string, password: string) {
			try {
				const accessToken = await fetch('http://localhost:3000/api/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email,
						password,
					}),
				});
				this.user = accessToken;
				this.isLoggedIn = true;
			} catch (error) {
				console.log(error);
			}
		},
	},
});
