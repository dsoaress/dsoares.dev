import { GetStaticPropsContext } from 'next'
import readingTime from 'reading-time'

import { formatDate } from '@/lib/formatDate'

export async function getSinglePost({ params, locale }: GetStaticPropsContext) {
  if (!params?.slug) throw new Error('slug is not defined')
  if (!locale) throw new Error('locale is not defined')

  return {
    id: '1',
    title: 'lorem',
    description: 'lorem',
    slug: 'lorem',
    cover: '/assets/avatar.jpg',
    date: formatDate(new Date().toISOString(), locale),
    readingTime: Math.ceil(readingTime(`lorem` || '').minutes)
  }
}
