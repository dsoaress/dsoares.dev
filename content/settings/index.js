const siteMetadata = require('./siteMetadata.json')

const settings = {
  title: siteMetadata.title,
  shortTitle: siteMetadata.shortTitle,
  description: siteMetadata.description,
  siteUrl: siteMetadata.siteUrl,
  favicon: siteMetadata.favicon,
  lang: siteMetadata.lang,
  gtmID: siteMetadata.gtmID,
  socialLinks: siteMetadata.socialLinks
}

module.exports = settings
