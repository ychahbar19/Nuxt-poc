// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// server side rendering mode
	ssr: true,
	// app config
	app: {
		// global transition
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' },
	},
	modules: ['@volar-plugins/vetur', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		exposeConfig: false,
		injectPosition: 0,
		viewer: true,
	},
	components: [
		{
			path: '~/components/',
			pathPrefix: false,
		},
	],
	imports: {
		dirs: ['stores'],
	},
});
