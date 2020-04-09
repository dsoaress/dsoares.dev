import styled from "styled-components"

import { MessageSquareError } from "@styled-icons/boxicons-solid/MessageSquareError"

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotFoundTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0;
`

export const Icon = styled(MessageSquareError)`
  width: 60px;
  color: var(--highLight);
`
