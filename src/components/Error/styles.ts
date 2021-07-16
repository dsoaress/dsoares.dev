import styled from 'styled-components'

export const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  text-align: center;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`
