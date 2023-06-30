/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue':
          'linear-gradient(215deg, #003b4d 0, #003b51 6.25%, #003a54 12.5%, #003956 18.75%, #003858 25%, #003759 31.25%, #00355a 37.5%, #12345a 43.75%, #1f3259 50%, #293058 56.25%, #322e55 62.5%, #392c53 68.75%, #3f2a4f 75%, #45284c 81.25%, #4a2648 87.5%, #4e2443 93.75%, #51233e 100%)',
      },
      fontFamily: {
        BeaufortBold: ['beaufort-bold'],
        SpiegelBold: ['spiegel-bold'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
