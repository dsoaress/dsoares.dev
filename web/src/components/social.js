import { useStaticQuery, graphql } from 'gatsby'
import {
  FaInstagram as Instagram,
  FaGithub as Github,
  FaWhatsapp as Whatsapp,
  FaRegEnvelope as Email
} from 'react-icons/fa'

const Icons = {
  Instagram,
  Github,
  Whatsapp,
  Email
}

const Social = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          links {
            label
            url
          }
        }
      }
    `
  )

  return (
    <ul className="flex space-x-8 m-0 p-0 list-none">
      {sanitySiteSettings.links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <li key={i}>
            {link.url && (
              <a
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-default hover:text-highLight"
              >
                <div>
                  <Icon size="26px" />
                </div>
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Social
