import Tag from '@/components/Tag'

export default function Tags({ tags }) {
  return (
    <div className="flex flex-wrap" aria-label="tags">
      {tags.map(({ tag }, i) => {
        const { name, color } = tag
        return <Tag key={i} color={color} name={name} />
      })}
    </div>
  )
}
