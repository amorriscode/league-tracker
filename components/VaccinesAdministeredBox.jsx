import DataBox from './DataBox'
import Triangle from '../public/triangle.svg'

export default function VaccinesAdministeredBox({
  handleOnClick,
  isShowingContent,
}) {
  return (
    <div className="relative">
      <DataBox
        title="Total Vaccines Administered In Canada"
        metric="2.1 million"
        subtitle="Learn about your vaccine distribution plans"
        handleOnClick={() => handleOnClick('vaccinesAdministered')}
        showSubtitle={!isShowingContent}
        selected={isShowingContent}
      />

      {isShowingContent && (
        <Triangle className="absolute bottom-0 left-0 right-0 mx-auto -mb-1" />
      )}
    </div>
  )
}
