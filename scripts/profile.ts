import { writeFileSync } from 'node:fs'
import { getPlaiceholder } from 'plaiceholder'

export async function profile({
  dataDir,
  title,
  shortTitle,
  githubUsername,
  avatar,
  favicon,
  faviconSizes
}: {
  dataDir: string
  title: string
  shortTitle: string
  githubUsername: string
  avatar: string
  favicon: string
  faviconSizes: number[]
}) {
  console.log('generating profile...')

  const { base64: avatarBlurDataURL } = await getPlaiceholder(avatar, { size: 10 })

  const profile = {
    title,
    shortTitle,
    githubUsername,
    avatar: {
      blur: avatarBlurDataURL,
      src: avatar
    },
    favicon: {
      src: favicon,
      sizes: faviconSizes
    }
  }

  writeFileSync(`${dataDir}/profile.json`, JSON.stringify(profile, null, 2))
}
