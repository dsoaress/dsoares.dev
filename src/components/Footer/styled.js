import styled from "styled-components"

import { Heart } from "@styled-icons/typicons/Heart"

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 0.75rem;
`

export const FooterItens = styled.p`
  margin: -2px 0;
`

export const HeartIcon = styled(Heart)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  fill: var(--highLight);
`
