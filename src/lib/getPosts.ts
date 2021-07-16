const username = process.env.DEV_TO_PROFILE

export const getPosts = `https://dev.to/api/articles?username=${username}`
