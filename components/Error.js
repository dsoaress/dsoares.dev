import Heading from '@/components/Heading'

export default function Error({ title, message }) {
  return (
    <main className="fixed inset-0 flex items-center justify-center p-8 text-center">
      <div>
        <Heading>{title}</Heading>
        <p>{message}</p>
      </div>
    </main>
  )
}
