import cn from 'classnames'

export default function Heading({
  as,
  children,
  className,
  noMargin,
  size,
  ...props
}) {
  const Element = { as }

  return (
    <Element.as
      className={cn(
        'font-bold',
        {
          'text-4xl md:text-5xl': as === Sizes.h1,
          'text-3xl md:text-4xl': as === Sizes.h2,
          'font-semibold text-lg md:text-xl lg:text-2xl': as === Sizes.h3,
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

Heading.defaultProps = {
  as: Sizes.h2
}
