import DataBox from './DataBox'
import Triangle from '../public/triangle.svg'

export default function VaccineHowBox({ handleOnClick, isShowingContent }) {
  return (
    <div className="relative">
      <DataBox
        title="How Vaccines Are Developed"
        metric="3 phases to know"
        subtitle="Learn how the vaccines were developed"
        handleOnClick={() => handleOnClick('vaccineHow')}
        showSubtitle={!isShowingContent}
        selected={isShowingContent}
      />

      {isShowingContent && (
        <Triangle className="absolute bottom-0 left-0 right-0 mx-auto -mb-1" />
      )}
    </div>
  )
}
