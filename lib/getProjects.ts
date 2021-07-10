const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME
export const getProjects = `https://api.github.com/users/${username}/repos?sort=pushed`
