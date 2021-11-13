export default {
  github: 'https://github.com/itsrajan/blog',
  titleSuffix: ' – Rajan Agarwal',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Writings</span>
      <span className="text-gray-600 font-normal hidden md:inline"><a href="https://heyrajan.com" style={{textDecoration: 'none', color: 'gray'}}>
        Rajan Agarwal 
      </a></span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Writings & Posts - Rajan Agarwal" />
      <meta name="og:description" content="A collection of thoughts, writings and ideas" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content="posts.heyrajan.com" />
      <meta name="twitter:url" content="https://posts.heyrajan.com" />
      <meta name="og:title" content="Writings // Rajan Agarwal" />
      <meta name="apple-mobile-web-app-title" content="Rajan Agarwal" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: false,
  prevLinks: true,
  nextLinks: true,
	font: false,
	footer: false,
	darkMode: true,
	footerEditLink: 'Powered by Nextra',
  footerText: <>{new Date().getFullYear()} © Rajan Agarwal.</>,
  unstable_faviconGlyph: '👋',
}
