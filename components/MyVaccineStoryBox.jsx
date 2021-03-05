import DataBox from './DataBox'
import Triangle from '../public/triangle.svg'

export default function MyVaccineStoryBox({ handleOnClick, isShowingContent }) {
  return (
    <div className="relative">
      <DataBox
        title="My Vaccine Story"
        metric="600+ stories shared"
        subtitle="Read stories from your community and share your own"
        handleOnClick={() => handleOnClick('myVaccineStory')}
        showSubtitle={!isShowingContent}
        selected={isShowingContent}
      />

      {isShowingContent && (
        <Triangle className="absolute bottom-0 left-0 right-0 mx-auto -mb-1" />
      )}
    </div>
  )
}
