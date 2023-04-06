/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': '#2A2A2A',
        'cerulean': "#00B3FA",
        'azure-radiance':'#008BF6',
        'ripe-lemon': '#F6E224',
        'alto': '#D6D6D6',
        'aqua': '#00E4FE',
      },

      backgroundImage: {
        'gradient-104': 'linear-gradient(104deg, var(--tw-gradient-stops))',
        'promo-texture': "url('./../../src/assets/images/promo_bg.svg')",
      },

      fontSize: {
        '2xl': ['1.5rem', {
          lineHeight: '2.188rem'
        }],
  
        '6xl': ['4rem', {
          lineHeight: '5.938rem',
        }],
  
        '8xl': ['5.25rem', {
          lineHeight: '7.813rem'
        }],
      },
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}
