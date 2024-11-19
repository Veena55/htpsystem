/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'btn-grad': 'linear-gradient(32deg, #004cd8 0, #051866 55%)'
        // 'btn-grad': 'linear-gradient(to top, black, #00020b,#0a56a4)'
        // 'btn-blue': '#605af9'
        // 'grad': 'linear-gradient(to right, #605af9 40%,#c9c8ff 80%,#d2d2d2)',
        'grad': 'linear-gradient(to right, #F8311E 40%,#FDC444 80%,#FC9E28)',
        // 'grad': 'linear-gradient(to right, #605af9 20%, #c9c8ff 50%, #d2d2d2 80%)',
        'wallpaper3': 'url("/src/assets/wallpaper3.png")'
        // 'wallpaper1': 'url("./src/assets/wallpaper2.png")'
      },
      colors: {
        'theme1': '#161618',
        'theme2': '#F8311E',
        'themeLight': '#1F1F1F',
        'htpSystem': '#F8311E'
        // 'htpSystem': '#605af9'
      },
      boxShadow: {
        custom: '0 -4px 6px .7px red' // Shadow appears only at the top'
      },
    },
  },
  plugins: [],
}

