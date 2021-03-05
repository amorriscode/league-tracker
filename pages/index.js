import withLayout from '../components/withLayout'
import NeedToKnow from '../components/NeedToKnow'

function Home() {
  return (
    <main>
      <NeedToKnow />
    </main>
  )
}

export default withLayout(Home)
