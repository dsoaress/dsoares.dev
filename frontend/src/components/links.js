export default function Links({ data }) {
  return (
    <section className="my-16">
      {data.map(item => {
        const { _id, label, url } = item
        if (!label || !url) return
        return (
          <a href={url} key={_id}>
            <button className="font-bold uppercase w-full my-3 p-4 bg-green-700 hover:bg-green-800 rounded-md transition-colors">
              {label}
            </button>
          </a>
        )
      })}
    </section>
  )
}
