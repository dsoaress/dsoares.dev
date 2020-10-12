import React from 'react'
import styled from 'styled-components'
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

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const Item = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin: 0;
  }
`

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
    <List>
      {sanitySiteSettings.links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <Item key={i}>
            {link.url && (
              <a
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <Icon size="26px" />
                </div>
              </a>
            )}
          </Item>
        )
      })}
    </List>
  )
}

export default Social
