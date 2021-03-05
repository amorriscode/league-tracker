import Head from 'next/head'
import Link from 'next/link'

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
          <Link href="/">
            <a className="text-4xl">
              <span className="font-bold text-brand-blurple">Vacc</span>
              <span className="font-bold text-brand-teal">info</span>
            </a>
          </Link>
        </nav>

        <div className="p-8">
          <PageComponent {...pageProps} />
        </div>
      </>
    )
  }

  return PageComponentWithLayout
}
