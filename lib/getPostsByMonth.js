import { isSameMonth, isSameYear, parseISO } from 'date-fns'
import { useRouter } from 'next/router'

import { formatDate } from '@/lib/formatDate'

export function getPostsByMonth(posts) {
  const { locale } = useRouter()

  return posts.reduce((postsByMonth, post) => {
    const exists = postsByMonth.find(p => {
      const newDate = new Date(post.date)
      const existingDate = new Date(p.date)
      return (
        isSameMonth(newDate, existingDate) && isSameYear(newDate, existingDate)
      )
    })

    if (exists) {
      exists.posts.push(post)
    } else {
      postsByMonth.push({
        date: formatDate(post.date),
        posts: [post]
      })
    }

    return postsByMonth
  }, [])
}
