import cn from 'classnames'

export default function Heading({
  as,
  children,
  className,
  noMargin,
  size,
  ...props
}) {
  const Element = { as: as || size }

  return (
    <Element.as
      className={cn(
        'font-bold',
        {
          [h1Style]: size === Sizes.h1,
          [h2Style]: size === Sizes.h2,
          [h3Style]: size === Sizes.h3,
          'mb-6': !noMargin
        },
        className
      )}
      {...props}
    >
      {children}
    </Element.as>
  )
}

const Sizes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3'
}

const h1Style = `

`

const h2Style = `
  text-3xl
  md:text-4xl
  lg:text-5xl
`

const h3Style = `
  font-semibold
  text-lg
  md:text-xl
  lg:text-2xl
`

Heading.defaultProps = {
  as: undefined,
  size: Sizes.h2
}
