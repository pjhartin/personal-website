const purgecss = require('@fullhuman/postcss-purgecss')
const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss')(tailwindJS),
    require('autoprefixer'),
    purgecss({
      content: [
        './pages/**/*.vue',
        './layouts/**/*.vue',
        './components/**/*.vue'
      ],
      whitelist: ["html", "body", "nuxt-progress", "wf-active"],
      whitelistPatterns: [/nuxt-/]
    })
  ]
}

// module.exports = {
//   plugins: [
//     require('tailwindcss')('./tailwind.js'),
//     require('autoprefixer'),
//     purgecss({
//       content: [
//         './pages/**/*.vue',
//         './layouts/**/*.vue',
//         './components/**/*.vue'
//       ],
//       whitelist: ["html", "body", "nuxt-progress", "wf-active"],
//       whitelistPatterns: [/nuxt-/]
//     })
//   ]
// };
