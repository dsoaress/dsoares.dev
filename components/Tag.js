import Link from 'next/link'
import cn from 'classnames'

export default function Tag({ color, name, size, ...rest }) {
  return (
    <div className="relative inline-block">
      <Link href={`/blog/tag/${name}`}>
        <a aria-label={name} className="absolute inset-0"></a>
      </Link>
      <div
        className={cn(
          color,
          'duration-300 font-bold leading-4 rounded-md transition',
          {
            'mr-2 mt-2 p-1.5 text-sm': size === 'small',
            'p-2 md:py-1 ml-3 text-xl md:text-2xl': size === 'bigger'
          }
        )}
        {...rest}
      >
        {name}
      </div>
    </div>
  )
}

Tag.defaultProps = {
  size: 'small'
}
