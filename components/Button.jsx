export default function Button({ children, handleOnClick, primary }) {
  const bgColor = primary
    ? 'bg-brand-teal hover:bg-brand-teal-dark'
    : 'bg-brand-blurple hover:bg-brand-blurple-med'

  return (
    <button
      className={`font-semibold text-sm uppercase text-center  text-white py-4 rounded-lg px-8 ${bgColor}`}
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  )
}
