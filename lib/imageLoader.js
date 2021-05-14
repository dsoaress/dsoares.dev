const { NEXT_PUBLIC_API_URL } = process.env

export function imageLoader(image) {
  return `${NEXT_PUBLIC_API_URL}/assets/${image}`
}
