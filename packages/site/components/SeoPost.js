import { NextSeo, BlogJsonLd } from 'next-seo'

import seoData from '@/seo'

export default function SeoPost({
  date,
  dateUpdated,
  description,
  image,
  tags,
  title,
  url
}) {
  const tagsArr = tags.split(',')
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: dateUpdated,
            tags: [tagsArr]
          },
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title
            }
          ]
        }}
      />
      <BlogJsonLd
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={dateUpdated}
        authorName={seoData.title}
        description={description}
      />
    </>
  )
}
