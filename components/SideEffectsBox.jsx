import DataBox from './DataBox'
import Triangle from '../public/triangle.svg'

export default function SideEffectsBox({ handleOnClick, isShowingContent }) {
  return (
    <div className="relative">
      <DataBox
        title="Understanding Side Effects"
        metric="Safe and secure"
        subtitle="Side effects are normal signs that your body is building protection"
        handleOnClick={() => handleOnClick('sideEffects')}
        showSubtitle={!isShowingContent}
        selected={isShowingContent}
      />

      {isShowingContent && (
        <Triangle className="absolute bottom-0 left-0 right-0 mx-auto -mb-1" />
      )}
    </div>
  )
}
