export default function QuizOption({ option, selected }) {
  const defaultComponent = (
    <div className="p-4 rounded-lg border border-brand-blue">
      <div>
        <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-button-gray" />
        <div className="flex pl-2">{option}</div>
      </div>
    </div>
  )

  const selectedComponent = (
    <div className="p-4 rounded-lg border border-brand-blue bg bg-brand-blue">
      <div>
        <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-white" />
        <div className="flex pl-2 text-white font-bold">{option}</div>
      </div>
    </div>
  )

  return selected ? selectedComponent : defaultComponent
}
