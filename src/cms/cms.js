import CMS from 'netlify-cms-app'
import IndexPage from './templates/index-page'
import AboutPage from './templates/about-page'
import BlogPost from './templates/blog-post'
import '@styles/tailwind.scss'

CMS.registerPreviewTemplate('index-page', IndexPage)
CMS.registerPreviewTemplate('about-page', AboutPage)
CMS.registerPreviewTemplate('posts', BlogPost)
