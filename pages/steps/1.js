import withLayout from '../../components/withLayout'

function Home() {
  return (
    <main>
      <h1 className="uppercase font-bold text-brand-blurple text-3xl mb-2">
        Step 1
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-brand-blurple-light rounded-lg p-4 space-y-4">
          <p className="font-bold">It&apos;s the day of your vaccine!</p>

          <div className="bg-white rounded p-4">
            <h2 className="text-brand-blurple font-semibold">To Do:</h2>
          </div>
        </div>

        <div>
          <div className="bg-brand-blurple-med rounded-lg">
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default withLayout(Home)
