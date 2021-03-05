import withLayout from '../components/withLayout'
import NeedToKnow from '../components/NeedToKnow'
import Survey from '../components/Survey'
import StepsCard from '../components/StepsCard'

function Home() {
  return (
    <main className="space-y-8">
      <Survey />
      <NeedToKnow />
      <StepsCard />
    </main>
  )
}

export default withLayout(Home)
