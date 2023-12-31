/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "poppins": ["Poppins", ...fontFamily.sans],
        "nunito": ["Nunito", ...fontFamily.sans],
      },
      boxShadow: {
        'sm': '0px 9px 34.3px 0.7px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
