import camelcaseKeys from 'camelcase-keys'

export async function fetcher(url: string) {
  const response = await fetch(url)
  const data = await response.json()
  return camelcaseKeys(data)
}
