export default function Welcome({ firstName, lastName }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-8 font-bold text-center">
      <div>
        <h1 className="mb-4 text-6xl">
          {firstName}
          <span className="text-primary-500">{lastName}</span>
        </h1>
        <p className="text-xl">Open Graph Image Generator</p>
      </div>
    </div>
  )
}
