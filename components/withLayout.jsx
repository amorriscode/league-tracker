import Head from 'next/head'

export default function withLayout(PageComponent) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    return (
      <>
        <Head>
          <title>League Tracker</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <nav className="px-8 py-4 border-b-2 border-gray-100">
          <div>League Tracker</div>
        </nav>

        <div className="p-8">
          <PageComponent {...pageProps} />
        </div>
      </>
    )
  }

  return PageComponentWithLayout
}
