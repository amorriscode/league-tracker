module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'brand-blurple-light': '#EDE8FA',
        'brand-blurple-med': '#B9A4ED',
        'brand-blurple': '#501CD2',
        'brand-teal-light': '#E8F8F5',
        'brand-teal': '#01C3A2',
        'brand-teal-dark': '#00A886',
        'brand-blue-light': '#EAEEFB',
        'brand-blue': '#2E5CDF',
        'brand-red-light': '#F9DEE3',
        'brand-red': '#D92045',
        'brand-red-dark': '#BA1B3B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
