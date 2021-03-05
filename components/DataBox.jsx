import ArrowDown from '../public/arrow-down.svg'

export default function DataBox({
  title,
  metric,
  subtitle,
  showSubtitle = true,
  selected = false,
  handleOnClick,
}) {
  return (
    <div>
      <div
        className={`p-8 rounded-lg relative hover:cursor-pointer ${
          selected ? 'bg-brand-teal-dark' : 'bg-brand-teal-light'
        }`}
        onClick={handleOnClick}
      >
        <h2
          className={`font-bold uppercase text-sm mb-6 ${
            selected ? 'text-white' : 'text-brand-teal-dark'
          }`}
        >
          {title}
        </h2>

        <div className="font-extrabold text-2xl">{metric}</div>

        <ArrowDown className="absolute bottom-0 right-0 mr-3 mb-3" />
      </div>

      {showSubtitle && <div className="text-sm p-4 h-20">{subtitle}</div>}
    </div>
  )
}
