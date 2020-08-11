import React from 'react'

import Icons from './Icons'
import links from './content'
import * as S from './styled'

const Social = () => (
  <S.SocialWrapper>
    <S.SocialList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialItem key={i}>
            <S.SocialLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLink>
          </S.SocialItem>
        )
      })}
    </S.SocialList>
  </S.SocialWrapper>
)

export default Social
