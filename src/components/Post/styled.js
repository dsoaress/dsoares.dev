import styled from "styled-components"
import media from "styled-media-query"

import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { ClockOutline } from "@styled-icons/evaicons-outline/ClockOutline"

export const PostWrapper = styled.section`
  max-width: 800px;
`

export const PostTitle = styled.h1`
  font-size: 6rem;
  line-height: 0.8;
  margin-top: 3rem;

  ${media.lessThan("medium")`
  font-size: 3rem;
  line-height: 1;
  margin-top: 1rem;
  `}
`

export const Meta = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.4;
  margin: 3rem 0 5rem;
  padding: 1rem 0;
  background: var(--backgroundMedium);

  ${media.lessThan("medium")`
  margin: 2rem 0 3rem;
  `}

  ${media.lessThan("375px")`
  font-size: 0.65rem;
  `}
`

export const MetaItem = styled.span`
  margin: 0 15px;
`

export const CalendarIcon = styled(Calendar)`
  width: 18px;
  margin: -5px 5px 0 0;
  color: var(--highLight);

  ${media.lessThan("375px")`
  width: 14px;
  `}
`

export const ClockIcon = styled(ClockOutline)`
  width: 18px;
  margin: -5px 5px 0 0;
  color: var(--highLight);

  ${media.lessThan("375px")`
  width: 14px;
  `}
`

export const MainContent = styled.section`
  figcaption,
  blockquote,
  .footnotes {
    font-size: 0.875rem;
    font-style: italic;
    line-height: 1.4;
  }

  figcaption {
    text-align: center;
    margin-top: 0.8rem;
  }

  blockquote {
    padding-left: 1.35rem;
    border-left: 3px solid var(--backgroundMedium);
  }

  .footnotes {
    margin-top: 2rem;
  }

  .footnotes hr {
    width: 8rem;
    background: var(--default);
  }

  .footnotes p {
    display: inline;
  }

  a.footnote-ref,
  a.footnote-backref {
    border-bottom: none;
  }
`
