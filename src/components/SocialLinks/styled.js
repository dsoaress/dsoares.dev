import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksList = styled.ul`
  list-style: none;
  margin: 40px 0 0 0;
  display: flex;
  justify-content: space-between;

  ${media.lessThan("medium")`
    margin-top: 20px;
  `}
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--default);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highLight);
  }
`

export const IconWrapper = styled.div`
  width: 30px;

  .instagram {
    width: 33px;

    ${media.lessThan("medium")`
      width: 28px;
    `}
  }

  .academia {
    width: 24px;

    ${media.lessThan("medium")`
      width: 21px;
    `}
  }

  .lattes {
    width: 27px;
    margin-top: 2px;

    ${media.lessThan("medium")`
      width: 23px;
      margin-top: 3px;
    `}
  }

  .whatsapp {
    width: 32px;

    ${media.lessThan("medium")`
      width: 28px;
    `}
  }

  ${media.lessThan("medium")`
    width: 25px;
  `}
`
