import Tag from '@/components/Tag'

export default function Tags({ tags }) {
  return (
    <div className="flex flex-wrap" aria-label="tags">
      {tags.map(({ tags_name }, i) => {
        const { name, color } = tags_name
        return <Tag key={i} color={color} name={name} />
      })}
    </div>
  )
}
