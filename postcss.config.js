/** @type {import('postcss-load-config').Config} */

// PostCSS is the tool that processes your CSS.
// Tailwind uses PostCSS under the hood.
// Autoprefixer adds vendor prefixes like -webkit- automatically.

module.exports = {
  plugins: {
    // Tailwind CSS — processes @tailwind directives in globals.css
    tailwindcss: {},

    // Autoprefixer — adds browser-compatibility prefixes automatically
    // e.g. -webkit-transform, -moz-transform etc.
    autoprefixer: {},
  },
};
