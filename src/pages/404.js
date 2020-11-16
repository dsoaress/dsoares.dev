import React from 'react'
import SEO from '../components/seo'
import NotFoundPageTemplate from '../templates/not-found'
import * as indexPage from '../settings/index-page.json'
import * as notFoundPage from '../settings/not-found-page.json'
import * as siteMetadata from '../settings/site-metadata.json'

const NotFoundPage = () => (
  <>
    <SEO />
    <NotFoundPageTemplate
      background={indexPage.background}
      borderRadius={indexPage.borderRadius}
      buttonsColor={indexPage.buttonsColor}
      buttonsFontColor={indexPage.buttonsFontColor}
      buttonLabel={notFoundPage.buttonLabel}
      fontColor={indexPage.fontColor}
      header={notFoundPage.title}
      logo={indexPage.logo}
      message={notFoundPage.message}
      title={siteMetadata.title}
    />
  </>
)

export default NotFoundPage
