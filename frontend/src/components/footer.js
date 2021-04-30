import { RiCopyleftLine } from 'react-icons/ri'

export default function Footer({ footer, name }) {
  return (
    <footer className="my-8 text-xs text-center">
      <p>{footer}</p>
      <div className="flex justify-center items-center space-x-1">
        <div>{name}</div>
        <div>
          <RiCopyleftLine />
        </div>
        <div>{new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
