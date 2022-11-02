/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgpic-img': "url('https://free4kwallpapers.com/uploads/originals/2019/09/09/forest-art-wallpaper.jpg')"
      })

    },
  },
  plugins: [],
}
