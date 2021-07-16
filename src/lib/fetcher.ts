import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url)
  return camelcaseKeys(data, { deep: true })
}
