/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: '0',
      '1/4': '25%',
      half: '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
