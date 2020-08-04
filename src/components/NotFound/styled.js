import styled from 'styled-components'

import { MessageSquareError } from '@styled-icons/boxicons-solid/MessageSquareError'

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const NotFoundTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
`

export const NotFoundText = styled.p`
  text-align: center;
`

export const Icon = styled(MessageSquareError)`
  width: 60px;
  color: var(--highLight);
`
