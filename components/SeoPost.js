import { NextSeo, NewsArticleJsonLd } from 'next-seo'

export default function SeoPost({
  authorName,
  body,
  date,
  dateUpdated,
  description,
  image,
  tags,
  title,
  url
}) {
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
            modifiedTime: dateUpdated
            // tags
          }
          // images: [
          //   {
          //     url: image,
          //     width: 850,
          //     height: 650,
          //     alt: title
          //   }
          // ]
        }}
      />
      <NewsArticleJsonLd
        url={url}
        title={title}
        // [image]
        keywords={tags}
        datePublished={date}
        dateModified={dateUpdated}
        authorName={authorName}
        description={description}
        body={body}
      />
    </>
  )
}
