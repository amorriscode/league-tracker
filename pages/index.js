import withLayout from '../components/withLayout'
import NeedToKnow from '../components/NeedToKnow'

function Home() {
  return (
    <main>
      <NeedToKnow />

      <div className="w-4/5 mx-auto space-y-4">
        <h1 className="font-bold text-xl">Take the Survey!</h1>

        <div className="p-6 rounded-lg bg bg-brand-blue-light flex space-x-20">
          <div className="w-1/4 font-bold">
            How confident are you in the vaccines in protecting you against
            COVID-19?
            <div className="-ml-1 flex pt-4">
              <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-gray-300" />
              <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-gray-300" />
              <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-gray-300" />
              <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-gray-300" />
            </div>
            <div className="flex">
              <div className="text-sm pt-1">NEXT QUESTION</div>
              <img src="/arrow-right.svg" className="pl-3 pt-1 w-6 h-6" />
            </div>
          </div>

          <div className="w-1/4 space-y-2">
            {[1, 2, 3].map((i) => (
              <QuizOption selected={false} option={`Test ${i}`} />
            ))}
          </div>

          <div className="w-1/2 flex">
            <div className="w-3/5 h-4/5 font-bold">
              Answer the question on the left to see how your community has
              responded to the same question!
            </div>
            <div className="w-2/5 h-4/5">
              <img
                src="/Icon Man Wave.svg"
                className="relative bottom-0 right-0"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default withLayout(Home)
