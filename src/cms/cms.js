import CMS from 'netlify-cms-app'
import ProfilePreview from './templates/profile'
import AboutPreview from './templates/about'
import NotFoundPreview from './templates/not-found'
import BlogPostPreview from './templates/blog-post'
import '@styles/tailwind.scss'

CMS.registerPreviewTemplate('profile', ProfilePreview)
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('not-found', NotFoundPreview)
CMS.registerPreviewTemplate('posts', BlogPostPreview)
