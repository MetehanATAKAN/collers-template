/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
// Daha sonra flowbite'ı kullanabilirsiniz

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
    "./node_modules/flowbite/**/*.js"
]
}