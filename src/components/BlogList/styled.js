import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

import { Calendar } from "@styled-icons/boxicons-solid/Calendar"
import { ClockOutline } from "@styled-icons/evaicons-outline/ClockOutline"
import { ArrowForward as Arrow } from "@styled-icons/material-rounded/ArrowForward"

export const BlogWrapper = styled.div`
  display: block;
`

export const PostItemWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;

  ${media.lessThan("600px")`
    flex-direction: column;
  `}
`

export const PostItemImage = styled(Img)`
  flex: 1;
  margin-right: 20px;
  border-radius: 4px;

  ${media.lessThan("600px")`
    margin-right: 0;
  `}
`

export const PostTitleWrapper = styled.div`
  flex: 2;
  padding-top: 1.8rem;
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

export const PostTitle = styled.h2`
  margin: 1rem 0;
`

export const PostDescription = styled.p`
  a {
    border: none;
  }
`

export const ArrowIcon = styled(Arrow)`
  width: 20px;
  margin-top: -4px;
`
