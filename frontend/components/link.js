import NextLink from 'next/link'

const Link = ({ children, href, ...other }) => {
  const internal = /^\/(?!\/)/.test(href)

  if (internal) {
    return (
      <NextLink href={href} {...other}>
        {children}
      </NextLink>
    )
  }
  return (
    <a href={href} {...other}>
      {children}
    </a>
  )
}

export default Link
