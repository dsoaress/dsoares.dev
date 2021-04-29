export default function Footer({ footer, name }) {
  return (
    <footer className="my-8 text-xs text-center">
      <p>{footer}</p>
      <p>
        {name} ©️ {new Date().getFullYear()}
      </p>
    </footer>
  )
}
