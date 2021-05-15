export default function Input({ id, label, ...rest }) {
  return (
    <input
      id={id}
      className="w-full px-4 py-3 border rounded-md border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800"
      placeholder={label}
      aria-label={label}
      {...rest}
    />
  )
}
