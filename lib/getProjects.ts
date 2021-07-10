import profileData from '@/content/profile.json'

const username = profileData.profiles.dev
export const getProjects = `https://api.github.com/users/${username}/repos?sort=pushed`
