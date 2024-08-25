/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// sans is the default font family,
				// you can also use other custom font-families
				// using custom: ['custom-font-family']
				sans: ['Grandstander Variable']
			}
		}
	},
	plugins: []
};
