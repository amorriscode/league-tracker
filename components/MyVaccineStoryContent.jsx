import { useState } from 'react'

import StoryCard from './StoryCard'
import Button from './Button'

const stories = [
  {
    author: 'Brenda',
    city: 'Milton',
    authorTitle: 'Grandma',
    image: 'brenda.png',
    message:
      'I got vaccinated and am so grateful that now I can visit my grandchildren. I missed them terribly and now can bake their favourite cookies.',
  },
  {
    author: 'Hannah',
    city: 'Toronto',
    authorTitle: 'Entreprenuer',
    image: 'hannah.png',
    message:
      'I’ve been waiting to get together with my in-laws since the pandemic began. We’re all vaccinated now and we’re reuniting again. Life is back to normal!',
  },
  {
    author: 'Greg',
    city: 'Ottawa',
    authorTitle: 'Business Owner',
    image: 'greg.png',
    message:
      'I am finally able to continue my passion as a barber and help transform people’s lives, just like how the vaccine has transformed mine. Plus helping people groom their crazy covid hair!',
  },
]

export default function MyVaccineStoryContent() {
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className="grid grid-cols-3 gap-16">
      <div className="space-y-8 col-span-2">
        {stories.map((story) => (
          <StoryCard story={story} />
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Got your vaccine?
          <br />
          Share your own story with us!
        </h2>

        {showSuccess ? (
          <div className="flex flex-col items-center h-full pt-20">
            <div className="w-20 h-20 bg-brand-teal rounded-full flex justify-center items-center text-4xl mb-2">
              🎉
            </div>
            <p>Thanks for sharing your story!</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-4">
              <input
                placeholder="Your name"
                className="w-full rounded-lg p-4"
              />

              <input
                placeholder="Your city"
                className="w-full rounded-lg p-4"
              />

              <input
                placeholder="Your title"
                className="w-full rounded-lg p-4"
              />

              <input
                placeholder="Date vaccinated"
                className="w-full rounded-lg p-4"
              />

              <textarea
                placeholder="Your story"
                className="w-full rounded-lg p-4"
                style={{ height: '120px' }}
              />
            </div>

            <Button primary handleOnClick={() => setShowSuccess(true)}>
              Share Your Story
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
