import cn from 'classnames'

export default function Tag({ color, name, size }) {
  return (
    <div
      className={cn(defaultStyle, color, {
        [small]: size === 'small',
        [bigger]: size === 'bigger'
      })}
    >
      {name}
    </div>
  )
}

const defaultStyle = `
  duration-300
  font-semibold
  leading-4
  rounded-md
  transition
`

const small = `
  mr-2
  mt-2
  p-1.5
  text-sm
`

const bigger = `
  p-2
  text-lg
`
