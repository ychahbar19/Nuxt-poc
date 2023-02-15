export default defineNuxtRouteMiddleware((to, from) => {
	const isLoggedIn = useUserStore().isLoggedIn;
	if (!isLoggedIn) {
		return navigateTo('/');
	}
});
