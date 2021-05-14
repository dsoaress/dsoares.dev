import Heading from '@/components/Heading'

export default function Error({ title, message }) {
  return (
    <main className="fixed inset-0 flex justify-center items-center text-center p-8">
      <div>
        <Heading>{title}</Heading>
        <p>{message}</p>
      </div>
    </main>
  )
}
