import Image from 'next/image'

export default function Profile({ alt, description, greeting, image }) {
  return (
    <section className="my-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative rounded-lg h-64 md:h-full shadow-lg">
          <Image
            src={image}
            alt={alt}
            layout="fill"
            quality="90"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:py-8 lg:py-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-8">
            {greeting}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}
