/** @type {import('tailwindcss').Config} */
/**
 * @description https://primevue.org/tailwind/ 設定參考來源
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

