/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				twitter: '#1DA1F2',
				facebook: '#4267B2',
				instagram: '#E1306C',
				linkedin: '#0077B5',
			},
		},
	},
	plugins: [],
}
