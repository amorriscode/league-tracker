import { useRouter } from 'next/router'

import Button from './Button'

export default function VaccineHowContent() {
  const router = useRouter()

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold">Phase One</h3>
        <p>
          The vaccine is given to a small number of volunteers to assess its
          safety, confirm it generates an immune response, and determine the
          right dosage. Generally in this phase vaccines are tested in young,
          healthy adult volunteers.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Phase Two</h3>
        <p>
          The vaccine is then given to several hundred volunteers to further
          assess its safety and ability to generate an immune response.
          Participants in this phase have the same characteristics (such as age,
          sex) as the people for whom the vaccine is intended. There are usually
          multiple trials in this phase to evaluate various age groups and
          different formulations of the vaccine. A group that did not get the
          vaccine is usually included in phase as a comparator group to
          determine whether the changes in the vaccinated group are attributed
          to the vaccine, or have happened by chance.
        </p>
      </div>

      <div>
        <h3 className="font-bold">Phase Three</h3>
        <p>
          The vaccine is next given to thousands of volunteers – and compared to
          a similar group of people who didn’t get the vaccine, but received a
          comparator product – to determine if the vaccine is effective against
          the disease it is designed to protect against and to study its safety
          in a much larger group of people. Most of the time phase three trials
          are conducted across multiple countries and multiple sites within a
          country to assure the findings of the vaccine performance apply to
          many different populations.{' '}
        </p>
      </div>

      <Button
        handleOnClick={() =>
          router.push(
            'https://www.who.int/news-room/feature-stories/detail/how-are-vaccines-developed'
          )
        }
      >
        Learn more
      </Button>
    </div>
  )
}
