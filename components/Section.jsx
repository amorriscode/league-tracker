export default function Section({ title, children }) {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {children}
    </section>
  )
}
