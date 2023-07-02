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
        gold1: '#C89B3C',
        gold2: '#785A28',
        blue1: '#091428',
        blue2: '#0A1428',
        black: '#010A13',
        white: '#f7f7f7',
        whiteGold: '#F0E6D2',
      },
      fontFamily: {
        BeaufortBold: ['beaufort-bold'],
        BeaufortBoldItalic: ['beaufort-bold-italic'],
        BeaufortMedium: ['beaufort-medium'],
        SpiegelBold: ['spiegel-bold'],
        SpiegelBoldItalic: ['spiegel-bold-italic'],
        SpiegelSemibold: ['spiegel-semibold'],
      },
      fontSize: {
        '6xl': '3.25rem',
      },
    },
  },
}
