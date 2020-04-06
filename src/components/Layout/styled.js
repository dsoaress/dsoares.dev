import styled from "styled-components"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(var(--vh, 1vh) * 100);
`

export const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`
