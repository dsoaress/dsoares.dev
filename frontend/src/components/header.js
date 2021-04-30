export default function Header({ firstName, lastName }) {
  return (
    <header className="my-8">
      <div className="flex align-center justify-between">
        <h1 className="text-lg font-normal font-head uppercase">
          {firstName}
          <span className="text-green-600">{lastName}</span>
        </h1>
      </div>
    </header>
  )
}
