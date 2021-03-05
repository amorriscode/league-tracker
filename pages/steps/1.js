import { useRouter } from 'next/router'

import withLayout from '../../components/withLayout'
import Person from '../../public/person.svg'
import Button from '../../components/Button'

function Step1() {
  const router = useRouter()

  return (
    <main>
      <h1 className="uppercase font-bold text-brand-blurple text-3xl mb-2">
        Step 1
      </h1>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-brand-blurple-light rounded-lg p-8">
          <p className="font-bold mb-2">
            It&apos;s the day of your vaccine! Here's what you need to know to
            prepare!
          </p>

          <div className="bg-white rounded p-4 mb-4">
            <h2 className="text-brand-blurple font-semibold text-xl">To Do:</h2>
          </div>

          <ul className="list-inside list-disc px-16 space-y-8 text-lg mb-8">
            <li>Take your regular medication and eat your meals as usual.</li>

            <li>Do not wear any scented products.</li>

            <li>
              Wear a loose-fitting top or a t-shirt so that the health care
              provider can easily access your arm for the vaccination.
            </li>

            <li>
              If you have symptoms of COVID-19, you should not attend the
              clinic.
            </li>

            <li>
              Call theclinic and follow their instructions. Do not arrive more
              than 10 minutes before your appointment.
            </li>
          </ul>

          <div className="bg-white rounded p-4 mb-4">
            <h2 className="text-brand-blurple font-semibold text-xl">
              To Bring:
            </h2>
          </div>

          <ul className="list-inside list-disc px-16 space-y-8 text-lg font-bold">
            <li>
              Face mask
              <p className="pl-6 text-sm font-normal">
                When you show up for your appointment to get vaccinated, the CDC
                recommends covering your mouth and nose with a mask and staying
                at least six feet away from others (until, of course, it's time
                to be vaccinated).
              </p>
            </li>

            <li>
              Your health card
              <p className="pl-6 text-sm font-normal">
                If you do not have a health card, bring another form of a
                government: issued-photo ID such as a driver’s license,
                passport, Status Card or other provincial health cards.
              </p>
            </li>

            <li>
              Immunization record to keep track of this and other vaccines
            </li>

            <li>
              Assistive devices as needed (e.g. scooter, wheelchair, cane)
            </li>

            <li>A support person if required (e.g. interpreter)</li>

            <li>Reading glasses and/or hearing aid if required</li>
          </ul>
        </div>

        <div>
          <div className="bg-brand-blurple-light rounded-lg pt-4 px-8 flex items-center">
            <Person className="mr-8" />

            <div className="w-2/3 flex flex-col items-start justify-between space-y-4">
              <p className="font-bold">
                You just took your first vaccine. Here’s what to expect before
                your second dose.
              </p>

              <Button handleOnClick={() => router.push('/steps/2')}>
                Go to STEP 2
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default withLayout(Step1)
