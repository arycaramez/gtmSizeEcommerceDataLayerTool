module.exports = {
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"
],
theme: {
  extend: {},
},
plugins: [
  require("tw-elements/dist/plugin.cjs")
],
}
