/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lora",
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        customBg: 'rgb(255, 246, 239)',
        customCta: '#EE4836',
        customBlue: '#367FBF',
        customMint: 'rgb(161, 207, 199)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
