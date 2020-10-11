import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IconContext } from 'react-icons'
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
    <div>
      <ul>
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
                >
                  <div>
                    <IconContext.Provider value={{ size: '1.6rem' }}>
                      <Icon />
                    </IconContext.Provider>
                  </div>
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Social
