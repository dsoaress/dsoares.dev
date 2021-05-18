import cn from 'classnames'

export default function Alert({ message }) {
  const success = message.variant === 'success'
  const error = message.variant === 'error'

  return (
    <div className="mt-8 h-14">
      {message.text && (
        <div
          className={cn('text-sm rounded-md p-4', {
            green: success,
            red: error
          })}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}
