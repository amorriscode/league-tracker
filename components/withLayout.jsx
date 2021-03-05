import Head from 'next/head'

export default function withLayout(PageComponent) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <nav className="p-4 mb-4 border-b-2 border-gray-100">
          <div>League Tracker</div>
        </nav>

        <PageComponent {...pageProps} />
      </>
    )
  }

  return PageComponentWithLayout
}
