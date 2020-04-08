import styled from "styled-components"

import { Heart } from "@styled-icons/typicons/Heart"

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  font-size: 12px;
`

export const FooterItens = styled.p`
  margin: -2px;
`

export const HeartIcon = styled(Heart)`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  fill: #ff5184;
`
