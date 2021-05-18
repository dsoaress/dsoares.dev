import Heading from '@/components/Heading'

export default function Error({ title, message }) {
  return (
    <div className="flex items-center justify-center pt-20 text-center">
      <div>
        <Heading>{title}</Heading>
        <p>{message}</p>
      </div>
    </div>
  )
}
