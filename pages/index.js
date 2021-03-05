import Head from 'next/head'

import withLayout from '../components/withLayout'
import MapCanadaVaccines from '../components/MapCanadaVaccines'
import QuizOption from '../components/QuizOption'

function Home() {
  return (
    <div>
      <Head>
        <title>League Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="w-1/2 mx-auto space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <QuizOption key={i} option={i} />
          ))}
        </div>

        <MapCanadaVaccines />
      </main>
    </div>
  )
}

export default withLayout(Home)
