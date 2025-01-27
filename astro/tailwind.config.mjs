/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			blazity: '#fc4404',
			uep: '#078847',
		  },
		  fontWeight: {
			light: '300',
		  },
		},
	  },
	plugins: [],
}
