// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// server side rendering mode
	ssr: true,
	// app config
	// app: {
	// 	// global transition
	// 	pageTransition: { name: 'fade', mode: 'out-in' },
	// 	layoutTransition: { name: 'slide', mode: 'out-in' },
	// },
	modules: ['@volar-plugins/vetur', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
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
	nitro: {
		storage: {
			redis: {
				driver: 'redis',
				/* redis connector options */
				port: 6379, // Redis port
				host: '127.0.0.1', // Redis host
				username: '', // needs Redis >= 6
				password: '',
				db: 0, // Defaults to 0
				tls: {}, // tls/ssl
			},
		},
	},
	runtimeConfig: {
		JWT_SECRET: process.env.JWT_SECRET,
	},
});
