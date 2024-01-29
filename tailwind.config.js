import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'brand': {
        '50': '#fafee7',
        '100': '#f2fdc9',
        '200': '#e4fa9e',
        '300': '#cff462',
        '400': '#bae830',
        '500': '#99cd13',
        '600': '#79a80b',
        '700': '#597d0d',
        '800': '#4a6411',
        '900': '#3e5313',
        '950': '#101702',
      },
      'accent': '#FFC234'
    },
    extend: {
      fontFamily: {
        serif: ['"Kaisei Decol"', ...defaultTheme.fontFamily.serif]
        // sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}