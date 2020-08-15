import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
    <S.SocialWrapper>
      <S.SocialList>
        {markdownRemark.frontmatter.social.map((social, i) => {
          const Icon = Icons[social.label]

          return (
            <S.SocialItem key={i}>
              {social.value && (
                <S.SocialLink
                  href={social.url}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
                </S.SocialLink>
              )}
            </S.SocialItem>
          )
        })}
      </S.SocialList>
    </S.SocialWrapper>
  )
}

export default Social
