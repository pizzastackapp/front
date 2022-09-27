const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        1.25: '0.3125rem',
        2.75: '0.6875rem',
        3.5: '0.875rem',
        7.5: '1.875rem',
        15: '3.75rem',
        49: '12.25rem',
        112: '28rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child-path', '& path');
    }),
  ],
};
