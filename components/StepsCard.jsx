import Section from './Section'

export default function stepsCaard() {
  return (
    <Section title="Steps to take the Vaccine">
      <div className="grid grid-cols-5 gap-8">
        <div className="relative rounded-lg bg-brand-blurple-light flex flex-col justify-between">
          <div>
            <div className="mx-5 my-4 text-brand-blurple font-bold">STEP 1</div>
            <div className="mx-5 my-4 text-black">
              Pre-register for the vaccine at your nearest hospital.
            </div>
          </div>

          <div className="mx-3 my-2 p-4 text-brand-blurple font-bold border-4 border-brand-blurple rounded bg-transparent hover:bg-brand-blurple hover:text-white hover:cursor-pointer">
            LEARN MORE
          </div>
        </div>

        <div className="relative rounded-lg bg-brand-blurple-light flex flex-col justify-between">
          <div>
            <div className="mx-5 my-4 text-brand-blurple font-bold">STEP 2</div>
            <div className="mx-5 my-4 text-black">
              You’re registered and have an appointment confirmation now, what’s
              next?
            </div>
          </div>

          <div className="mx-3 my-2 p-4 text-brand-blurple font-bold border-4 border-brand-blurple rounded bg-transparent hover:bg-brand-blurple hover:text-white hover:cursor-pointer">
            LEARN MORE
          </div>
        </div>

        <div className="relative rounded-lg bg-brand-blurple-light flex flex-col justify-between">
          <div>
            <div className="mx-5 my-4 text-brand-blurple font-bold">STEP 3</div>
            <div className="mx-5 my-4 text-black">
              It’s the day of the vaccine! Learn more about what to expect on
              the day of.
            </div>
          </div>

          <div className="mx-3 my-2 p-4 text-brand-blurple font-bold border-4 border-brand-blurple rounded bg-transparent hover:bg-brand-blurple hover:text-white hover:cursor-pointer">
            LEARN MORE
          </div>
        </div>

        <div className="relative rounded-lg bg-brand-blurple-light flex flex-col justify-between">
          <div>
            <div className="mx-5 my-4 text-brand-blurple font-bold">STEP 4</div>
            <div className="mx-5 my-4 text-black">
              You just took your first vaccine. Here’s what to expect before
              your second dose.
            </div>
          </div>

          <div className="mx-3 my-2 p-4 text-brand-blurple font-bold border-4 border-brand-blurple rounded bg-transparent hover:bg-brand-blurple hover:text-white hover:cursor-pointer">
            LEARN MORE
          </div>
        </div>

        <div className="relative rounded-lg bg-brand-blurple-light flex flex-col justify-between">
          <div>
            <div className="mx-5 my-4 text-brand-blurple font-bold">STEP 5</div>
            <div className="mx-5 my-4 text-black">
              You just took your first vaccine. Here’s what to expect before
              your second dose.
            </div>
          </div>

          <div className="mx-3 my-2 p-4 text-brand-blurple font-bold border-4 border-brand-blurple rounded bg-transparent hover:bg-brand-blurple hover:text-white hover:cursor-pointer">
            LEARN MORE
          </div>
        </div>
      </div>
    </Section>
  )
}
