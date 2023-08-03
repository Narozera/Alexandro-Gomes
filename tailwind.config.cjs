/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  fontSize: {
		sm: "0.5rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.5rem",
		"2xl": "2rem",
		"2.5xl": "2.5rem",
		"3xl": "3rem",
	  },
	  colors: {
		primary: "#27356F",
		secondary: "#2F3861",
		terciary: "#465AAC",
		light: "#FFF",
	  },
	  fontFamily: {
		poppins: ["Poppins", "sans-serif"],
	  },
	},
	plugins: [],
  };
  