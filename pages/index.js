import withLayout from '../components/withLayout'
import NeedToKnow from '../components/NeedToKnow'
import Survey from '../components/Survey'

function Home() {
  return (
    <main>
      <Survey />
      <NeedToKnow />
    </main>
  )
}

export default withLayout(Home)
