import styled from 'styled-components'

import { Heart } from '@styled-icons/boxicons-solid/Heart'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`

export const Item = styled.p`
  margin: 0;
  line-height: 1;
`

export const HeartIcon = styled(Heart)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  fill: var(--highLight);
`
