import CMS from 'netlify-cms-app'
import BlogPost from './templates/blog-post'
import '@styles/tailwind.scss'

CMS.registerPreviewTemplate('posts', BlogPost)
