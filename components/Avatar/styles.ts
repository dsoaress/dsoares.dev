import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.background} 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
`
