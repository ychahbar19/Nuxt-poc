import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
]
export const theme = {
  colors: {
    ...colors,
    primary: '#18181B',
    secondary: '#00DC82',
  },
  extend: {},
}
export const plugins = []
