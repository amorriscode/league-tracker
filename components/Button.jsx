export default function Button({ children, handleOnClick }) {
  return (
    <button
      className="font-semibold text-sm uppercase text-center bg-brand-blurple text-white py-2 rounded-lg px-4 hover:bg-brand-blurple-med"
      onClick={() => handleOnClick()}
    >
      {children}
    </button>
  )
}
