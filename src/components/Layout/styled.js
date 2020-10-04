import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 140px 1fr 140px;
  min-height: calc(var(--vh, 1vh) * 100);

  @media (max-width: 450px) {
    grid-template-rows: 180px 1fr 140px;
  }
`

export const Main = styled.main``
