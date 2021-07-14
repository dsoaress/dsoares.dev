import profileData from '@/content/profile.json'

const username = profileData.profiles.dev
export const getPosts = `https://dev.to/api/articles?username=${username}`
