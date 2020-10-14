import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

import bio from './objects/bio'
import bioShort from './objects/bioShort'
import easterEgg from './objects/easterEgg'
import imageBlock from './objects/image'
import link from './objects/link'
import links from './objects/links'
import notFoundPage from './objects/notFoundPage'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import youtube from './objects/youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    category,
    siteSettings,
    bio,
    bioShort,
    easterEgg,
    imageBlock,
    link,
    links,
    notFoundPage,
    portableText,
    simplePortableText,
    youtube
  ])
})
