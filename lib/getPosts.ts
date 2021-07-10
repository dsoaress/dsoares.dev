import profileData from '@/content/profile.json'

const username = profileData.profiles.github
export const getPosts = `https://dev.to/api/articles?username=${username}`
