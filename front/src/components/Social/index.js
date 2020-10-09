import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IconContext } from 'react-icons'

import Icons from './Icons'
import * as S from './styled'

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
    <S.Wrapper>
      <S.List>
        {sanitySiteSettings.links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <S.Item key={i}>
              {link.url && (
                <S.Link
                  href={link.url}
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.IconWrapper>
                    <IconContext.Provider value={{ size: '1.6rem' }}>
                      <Icon />
                    </IconContext.Provider>
                  </S.IconWrapper>
                </S.Link>
              )}
            </S.Item>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}

export default Social
