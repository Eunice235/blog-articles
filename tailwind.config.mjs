const defaultTheme = require('tailwindcss/defaultTheme')




/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
				  50 : '#fef9f6',
				  100: '#fbe5d9',
				  200: '#f8d2bd',
				  300: '#f6bea1',
				  400: '#f3ab85',
				  500: '#EC7D43',
				  600: '#ce5515',
				  700: '#8a380e',
				  800: '#451c07',
				  900: '#220E03'
				},
				neutral: {
				  50 : '#F7F8F9',
				  100: '#E7EAEE',
				  200: '#D0D5DD',
				  300: '#B8C0CC',
				  400: '#A0ABBB',
				  500: '#64748B',
				  600: '#4B5768',
				  700: '#323A46',
				  800: '#191D23',
				  900: '#0D0F11'
				},
				dark: {
				  50 : '#383838',
				  100: '#363636',
				  200: '#333333',
				  300: '#2E2E2E',
				  400: '#2C2C2C',
				  500: '#272727',
				  600: '#252525',
				  700: '#232323',
				  800: '#1E1E1E',
				  900: '#121212'
				}
			  },
			  fontSize: {
				display: '3.5rem',
				'display-sm': '2rem'
			  },
			  fontFamily: {
				sans: ['Inter var', 'Proxima Nova', ...defaultTheme.fontFamily.sans],
				lora: '"Lora"'
			  }
		},
	},
	plugins: ['@tailwindcss/typography'],
}
