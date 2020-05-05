import React from "react"

import * as S from "./styled"

const NotFound = () => (
  <S.NotFoundWrapper>
    <S.Icon />
    <S.NotFoundTitle>NÃO ENCONTRADO</S.NotFoundTitle>
    <S.NotFoundText>
      Você acabou de pegar uma rota que não existe...
    </S.NotFoundText>
  </S.NotFoundWrapper>
)

export default NotFound
