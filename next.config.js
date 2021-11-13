const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
	projectLInk: 'https://github.com/itsrajan/blog',
	font: false
})
module.exports = withNextra()
