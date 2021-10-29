import { RichText } from 'prismic-dom'
import readingTime from 'reading-time'

export function getSerializedContent(content: string[]) {
  return RichText.asHtml(content)
}

export function getReadingTime(content: string[]) {
  return Math.floor(readingTime(getSerializedContent(content)).minutes)
}
