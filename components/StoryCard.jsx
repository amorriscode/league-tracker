export default function StoryCard({ story }) {
  return (
    <div className="flex justify-center items-center">
      <img src={story.image} className="-mr-20 z-10" />

      <div className="bg-white rounded-lg p-8 pl-32 space-y-4">
        <p className="font-bold">"{story.message}"</p>

        <p>
          {story.author}, {story.authorTitle} from {story.city}
        </p>
      </div>
    </div>
  )
}
