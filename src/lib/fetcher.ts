import camelcaseKeys from 'camelcase-keys'

export const fetcher = (url: string) =>
  fetch(url)
    .then(res => res.json())
    .then(res => camelcaseKeys(res))
