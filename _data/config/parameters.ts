const isDev = process.env.NODE_ENV === 'development'

export const parameters = {
  showNav: isDev ? true : false,
  showResume: isDev ? true : false,
  showProjects: isDev ? true : true,
  showPosts: isDev ? true : false,
  showFooter: isDev ? true : true
}
