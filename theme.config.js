export default {
  github: 'https://github.com/itsrajan/blog',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Rajan Agarwal</span>
      <span className="text-gray-600 font-normal hidden md:inline"><a href="https://heyrajan.com" style={{textDecoration: 'none', color: 'gray'}}>
        My Digital Garden 
      </a></span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Rajan Agarwal is a 16 year old hacktivist based in Toronto." />
      <meta name="og:description" content="A collection of thoughts, writings, projects and ideas" />
      <meta name="twitter:site:domain" content="heyrajan.com" />
      <meta name="twitter:url" content="https://heyrajan.com" />
      <meta name="og:title" content="Rajan Agarwal" />
      <meta name="apple-mobile-web-app-title" content="Rajan Agarwal" />
			<title>Rajan Agarwal - Author, Developer, Hacktivist</title>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
	font: false,
	footer: false,
	defaultMenuCollapsed: true,
	darkMode: true,
	footerEditLink: 'Powered by Nextra',
  footerText: <>{new Date().getFullYear()} © Rajan Agarwal.</>,
  unstable_faviconGlyph: '👋',
}
