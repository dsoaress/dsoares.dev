import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const { PRISMIC_ACCESS_TOKEN, PRISMIC_ENDPOINT } = process.env

  if (!PRISMIC_ACCESS_TOKEN || !PRISMIC_ENDPOINT) {
    throw new Error('Prismic keys are missing')
  }

  const prismic = Prismic.client(PRISMIC_ENDPOINT, {
    req,
    accessToken: PRISMIC_ACCESS_TOKEN
  })

  return prismic
}
