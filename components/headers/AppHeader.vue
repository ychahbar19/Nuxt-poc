<template>
	<header class="bg-primary sticky top-0 z-50">
		<nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
			<div
				class="flex w-full items-center justify-between border-b border-secondary py-6 lg:border-none"
			>
				<div class="flex items-center">
					<NuxtLink to="/">
						<img class="h-6 w-auto" src="/full-logo-green-light.svg" alt="" />
					</NuxtLink>
					<div class="ml-10 hidden space-x-8 lg:block">
						<a
							href="https://nuxt.com/docs/getting-started/introduction"
							class="text-base font-medium text-white hover:text-indigo-50"
						>
							Documentation
						</a>
						<NuxtLink
							v-for="link in navigation"
							:key="link.name"
							:to="link.href"
							class="text-base font-medium text-white hover:text-indigo-50"
						>
							{{ link.name }}
						</NuxtLink>
					</div>
				</div>
				<div class="ml-10 space-x-4">
					<button
						@click="login"
						class="inline-block rounded-md border border-transparent bg-secondary py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
					>
						Login
					</button>
					<!-- <NuxtLink
						to="/login"
						class="inline-block rounded-md border border-transparent bg-secondary py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
					>
						Sign in
					</NuxtLink> -->
					<NuxtLink
						to="/register"
						class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-primary hover:bg-opacity-75"
					>
						Sign up
					</NuxtLink>
				</div>
			</div>
			<div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
				<a
					href="https://nuxt.com/docs/getting-started/introduction"
					class="text-base font-medium text-white hover:text-indigo-50"
				>
					Documentation
				</a>
				<NuxtLink
					v-for="link in navigation"
					:key="link.name"
					:to="link.href"
					class="text-base font-medium text-white hover:text-indigo-50"
				>
					{{ link.name }}
				</NuxtLink>
			</div>
		</nav>
	</header>
</template>

<script setup>
	const router = useRouter();
	const navigation = [
		{ name: 'Catégories', href: '/category' },
		{ name: 'Produits', href: '/product' },
	];
	const store = useUserStore();

	const login = async () => {
		try {
			await store.login('test', 'test');
		} catch (error) {
			console.log(error);
		}
	};
</script>
