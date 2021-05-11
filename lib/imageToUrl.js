const { NEXT_PUBLIC_API_URL } = process.env

export function imageToUrl(image) {
  return `${NEXT_PUBLIC_API_URL}/assets/${image}`
}
