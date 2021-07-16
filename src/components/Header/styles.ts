import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 96px;
  width: 100%;
  height: 100vh;
`

export const Content = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 640px;
  padding: 0 2rem;
  text-align: center;
  z-index: 10;

  svg {
    margin: auto;
  }
`

export const Resume = styled.nav`
  display: flex;
  justify-content: center;
`

export const Avatar = styled.div`
  position: relative;
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
