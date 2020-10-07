import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IconContext } from 'react-icons'

import Icons from './Icons'
import * as S from './styled'

const Social = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { key: { eq: "settings" } }) {
          frontmatter {
            social {
              label
              url
            }
          }
        }
      }
    `
  )

  return (
    <S.Wrapper>
      <S.List>
        {markdownRemark.frontmatter.social.map((social, i) => {
          const Icon = Icons[social.label]

          return (
            <S.Item key={i}>
              {social.url && (
                <S.Link
                  href={social.url}
                  title={social.label}
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
