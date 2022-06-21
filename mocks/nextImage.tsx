export default jest.mock(
  'next/image',
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />
    }
)
