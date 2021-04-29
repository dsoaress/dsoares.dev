export default function Footer({ footerText, name }) {
  return (
    <footer className="my-8 text-xs text-center">
      <p>{footerText}</p>
      <p>
        {name} ©️ {new Date().getFullYear()}
      </p>
    </footer>
  )
}
