import withLayout from '../components/withLayout'
import NeedToKnow from '../components/NeedToKnow'
import MapCanadaVaccines from '../components/MapCanadaVaccines'
import QuizOption from '../components/QuizOption'
import StepsCard from '../components/StepsCard'
// <MapCanadaVaccines />

function Home() {
  return (
    <main>
      <NeedToKnow />
      <div className="w-1/2 mx-auto space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <QuizOption key={i} option={i} />
        ))}
      </div>

      <StepsCard />
    </main>
  )
}

export default withLayout(Home)
