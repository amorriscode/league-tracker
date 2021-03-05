import { useRouter } from 'next/router'

import Button from '../components/Button'

export default function SideEffectsContent() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <p>
          Shown are the most frequently reported adverse events up to and
          including February 19, 2021. The frequency is reported as a percentage
          relative to the number of doses administered.
        </p>
        <p>
          A total of 1,235 people reported adverse effects, however this
          represents only 0.088%, a very small fraction, of the more than 1.4
          million doses administered. This is equivalent to 88 reports per
          100,000 doses, or in other words, 88 people in a city the size of
          Moncton, NB or Milton, ON.
        </p>
        <p>
          A large majority of all adverse reactions, 84%, are minor and not
          considered serious. Typical minor symptoms are pain, redness,
          swelling, itching, and tingling at the site of the injection.
        </p>
        <p>
          Serious side effects are exceedingly rare. Only 0.012%, or 12 people
          out of every 100,000, experience serious side effects. There have been
          no confirmed deaths caused by COVID vaccination.
        </p>

        <Button
          handleOnClick={() =>
            router.push(
              'https://health-infobase.canada.ca/covid-19/vaccine-safety/'
            )
          }
        >
          Learn more
        </Button>
      </div>

      <img src="/side-effect-chart.png" className="w-full" />
    </div>
  )
}
