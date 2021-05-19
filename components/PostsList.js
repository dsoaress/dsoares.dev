import PostCard from '@/components/PostCard'

export default function PostsList({ posts }) {
  return (
    <ul className="space-y-16">
      {posts?.map(({ id, date, description, icon, slug, tags, title }) => {
        return (
          <li key={id}>
            <PostCard
              date={date}
              description={description}
              icon={icon}
              slug={slug}
              tags={tags}
              title={title}
            />
          </li>
        )
      })}
    </ul>
  )
}
