import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 48px 0;

  p {
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`
