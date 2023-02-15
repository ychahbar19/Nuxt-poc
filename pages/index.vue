<template>
	<div class="bg-gray-900 py-21 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl sm:text-center">
				<h2
					class="text-xl font-semibold leading-8 tracking-tight text-secondary"
				>
					Nuxt3 Proof of Concept
				</h2>
				<p
					class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
				>
					Build your next app with Nuxt3
				</p>
			</div>
		</div>
		<div class="relative overflow-hidden pt-16">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<img
					src="https://thecodest.co/images/uploaded/nuxt_3.png"
					alt="App screenshot"
					class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
					width="2432"
					height="1442"
				/>
				<div class="relative" aria-hidden="true">
					<div
						class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]"
					></div>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
			<dl
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
			>
				<div class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<!-- Heroicon name: mini/cloud-arrow-up -->
						<svg
							class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
								clip-rule="evenodd"
							/>
						</svg>
						Auto-import
					</dt>
					<dd class="inline">
						<br />Nuxt importe automatiquement des fonctions et des composables
						pour le fetch de data, accéder au contexte de l'application et gérer
						l'état ou définir des composants et des plugins.
					</dd>
				</div>

				<div class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<!-- Heroicon name: mini/lock-closed -->
						<svg
							data-v-389e99a3=""
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="m21.78 11.88l-2-2.5A1 1 0 0 0 19 9h-6V3a1 1 0 0 0-2 0v1H5a1 1 0 0 0-.78.38l-2 2.5a1 1 0 0 0 0 1.24l2 2.5A1 1 0 0 0 5 11h6v9H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-4h6a1 1 0 0 0 .78-.38l2-2.5a1 1 0 0 0 0-1.24ZM11 9H5.48l-1.2-1.5L5.48 6H11Zm7.52 5H13v-3h5.52l1.2 1.5Z"
							></path>
						</svg>
						File-system routing
					</dt>
					<dd class="inline">
						<br />Chaque fichier Vue situé dans le répertoire pages/ crée une
						URL (ou route) correspondante qui affiche le contenu du fichier.
					</dd>
				</div>

				<div class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<!-- Heroicon name: mini/arrow-path -->
						<svg
							data-v-389e99a3=""
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M20 16a3 3 0 0 0-1.73.56l-2.45-1.45A3.74 3.74 0 0 0 16 14a4 4 0 0 0-3-3.86V7.82a3 3 0 1 0-2 0v2.32A4 4 0 0 0 8 14a3.74 3.74 0 0 0 .18 1.11l-2.45 1.45A3 3 0 0 0 4 16a3 3 0 1 0 3 3a3 3 0 0 0-.12-.8l2.3-1.37a4 4 0 0 0 5.64 0l2.3 1.37A3 3 0 1 0 20 16ZM4 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8-16a1 1 0 1 1-1 1a1 1 0 0 1 1-1Zm0 12a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm8 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"
							></path>
						</svg>
						Data-fetching utilities
					</dt>
					<dd class="inline">
						<br />Nuxt fournit les hooks serveur useFetch, useLazyFetch,
						useAsyncData et useLazyAsyncData pour gérer la récupération de
						données dans votre application.
					</dd>
				</div>

				<div class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<!-- Heroicon name: mini/finger-print -->
						<svg
							class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
								clip-rule="evenodd"
							/>
						</svg>
						Rendering modes
					</dt>
					<dd class="inline">
						<br />Nuxt propose différents modes de rendu pour répondre à divers
						cas d'utilisation :
						<ul>
							<li>Rendu universel (Rendu côté serveur et hydratation)</li>
							<li>
								Rendu côté client uniquement Génération de sites statiques
								complets
							</li>
							<li>Rendu hybride (stratégie de mise en cache par route)</li>
						</ul>
					</dd>
				</div>

				<div class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<!-- Heroicon name: mini/cog-6-tooth -->
						<svg
							class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
								clip-rule="evenodd"
							/>
						</svg>
						Server engine (powered by Nitro)
					</dt>
					<dd class="inline">
						<br />Nuxt génère également votre API serveur en lisant les fichiers
						dans server/api/ et le middleware serveur dans server/middleware/.
					</dd>
				</div>

				<div class="relative pl-9">
					<dt class="inline font-semibold text-white">
						<!-- Heroicon name: mini/server -->
						<svg
							class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
							/>
							<path
								fill-rule="evenodd"
								d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
								clip-rule="evenodd"
							/>
						</svg>
						Les Nuxt modules
					</dt>
					<dd class="inline">
						<br />Nuxt est conçu pour être étendu. Il est facile d'ajouter des
						fonctionnalités avec des modules.
					</dd>
				</div>
			</dl>
		</div>
	</div>
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
