/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mont': ['"Montserrat Variable"', 'sans-serif']
			},

			keyframes: {
				wiggle:{
					'0%': {transform: 'translate(-300px,0)'},
					'100%': {transform: 'translate(400px,0)'},
				}
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
