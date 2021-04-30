export default function Links({ data }) {
  return (
    <section className="my-16">
      {data.map((item, i) => (
        <a href={item.url} key={i}>
          <button className="font-bold uppercase w-full my-3 p-4 bg-green-700 hover:bg-green-800 rounded-md transition-colors">
            {item.label}
          </button>
        </a>
      ))}
    </section>
  )
}
