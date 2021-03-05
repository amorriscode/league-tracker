export default function QuizOption({ option, selected, onHandleSelect }) {
  return (
    <div
      className={`p-2 rounded-lg border border-brand-blue bg-white w-full hover:border-opacity-75 hover:cursor-pointer ${
        selected ? 'bg-brand-blue text-white' : ''
      }`}
      onClick={onHandleSelect}
    >
      <div className="m-1 pt-1 float-left rounded-full h-4 w-4 flex items-center justify-center bg bg-button-gray" />
      <div className="flex pl-2">{option}</div>
    </div>
  )
}
