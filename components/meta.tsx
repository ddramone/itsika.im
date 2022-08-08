import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      {/* TODO: Replace Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&family=Lustria&display=swap" rel="stylesheet" />

      <script defer data-domain="ika.im" src="https://plausible.io/js/plausible.js"></script>

      {/* TODO: Add meta tags for Open Graph */}
      {/* <meta
        name="description"
        content={`A statically generated blog example using Next.js`}
        /> */}
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
      {/* ------- */}
    </Head>
  )
}

export default Meta
