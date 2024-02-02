/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  singleAttributePerLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;