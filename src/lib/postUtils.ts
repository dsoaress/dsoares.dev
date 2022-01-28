import { asHTML } from '@prismicio/helpers'
import { RichTextField } from '@prismicio/types'
import readingTime from 'reading-time'

export function getSerializedContent(content: RichTextField) {
  return asHTML(content)
}

export function getReadingTime(content: RichTextField) {
  return Math.floor(readingTime(getSerializedContent(content) || '').minutes)
}
