/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        prime: ["Courier Prime", "sans-serif"],
      },

      screens: {
        maxSmall: { raw: "(max-width: 387px)" },
        // => @media (max-width: 375px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss/nesting")],
};
