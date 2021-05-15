import cn from 'classnames'

export default function Button({ children, ...rest }) {
  return (
    <button className={button} {...rest}>
      {children}
    </button>
  )
}

const button = cn(
  'px-6',
  'py-3',
  'font-bold',
  'transition',
  'duration-300',
  'border',
  'rounded-md',
  'text-primary-50',
  'bg-primary-700',
  'hover:bg-primary-800',
  'dark:bg-primary-500',
  'dark:hover:bg-primary-600',
  'text-semibold',
  'border-primary-600',
  'dark:border-primary-400',
  'hover:shadow-lg'
)
