import profileData from '@/content/profile.json'

const username = profileData.profiles.github
export const getProjects = `https://api.github.com/users/${username}/repos?sort=pushed`
