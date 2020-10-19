import CMS from 'netlify-cms-app'
import IndexPage from './templates/index-page'
import AboutPage from './templates/about-page'
import NotFoundPage from './templates/not-found-page'
import WPAdminPage from './templates/wp-admin-page'
import BlogPost from './templates/blog-post'
import '@styles/tailwind.scss'

CMS.registerPreviewTemplate('index', IndexPage)
CMS.registerPreviewTemplate('about', AboutPage)
CMS.registerPreviewTemplate('not-found', NotFoundPage)
CMS.registerPreviewTemplate('wp-admin', WPAdminPage)
CMS.registerPreviewTemplate('posts', BlogPost)
