import styled from 'styled-components'

import { Calendar } from '@styled-icons/boxicons-solid/Calendar'
import { ClockOutline } from '@styled-icons/evaicons-outline/ClockOutline'

export const PostWrapper = styled.article`
  display: block;
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
  margin: 1rem 0;
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
