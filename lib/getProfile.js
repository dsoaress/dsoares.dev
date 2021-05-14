import serializeMdx from '@/lib/serializeMdx'
import settings from '@/settings'

export default async function getProfile(locale) {
  const t = settings[locale]
  const text = await serializeMdx(t.short_bio_text)
  const profile = { image: t.short_bio_image, text, title: t.short_bio_title }

  return profile
}
