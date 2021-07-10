const username = process.env.NEXT_PUBLIC_DEV_TO_USERNAME
export const getPosts = `https://dev.to/api/articles?username=${username}`
