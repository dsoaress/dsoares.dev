import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-top: 10px solid var(--highLight);

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`

export const Logo = styled.div`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;

  span {
    color: var(--highLight);
  }
`