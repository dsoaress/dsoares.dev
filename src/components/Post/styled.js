import styled from "styled-components"
import media from "styled-media-query"

import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { ClockOutline } from "@styled-icons/evaicons-outline/ClockOutline"

export const PostWrapper = styled.section`
  max-width: 800px;
`

export const Meta = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  color: var(--medium);
`

export const CalendarIcon = styled(Calendar)`
  width: 15px;
  margin: -5px 5px 0 0;
  color: var(--highLight);
`

export const ClockIcon = styled(ClockOutline)`
  width: 15px;
  margin: -5px 5px 0 10px;
  color: var(--highLight);
`

export const PostTitle = styled.h1`
  font-size: 6rem;
  line-height: 0.8;
  margin: 3rem 0;

  ${media.lessThan("medium")`
  font-size: 3.1rem;
  line-height: 1;
  margin: 2rem 0;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.3;

  ${media.lessThan("medium")`
  font-size: 1.4rem;
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
