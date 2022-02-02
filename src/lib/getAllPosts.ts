import { GetStaticPropsContext } from 'next'
import readingTime from 'reading-time'

import { formatDate } from '@/lib/formatDate'

export async function getAllPosts({ locale }: GetStaticPropsContext) {
  if (!locale) throw new Error('locale is not defined')

  const data = [
    {
      id: '1',
      title: 'lorem',
      description: 'lorem',
      slug: 'lorem',
      cover: '/assets/avatar.jpg',
      date: formatDate(new Date().toISOString(), locale),
      readingTime: Math.ceil(readingTime(`lorem` || '').minutes)
    }
  ]

  return data
}
