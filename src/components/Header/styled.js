import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-top: 10px solid var(--highLight);
`

export const Logo = styled.h1`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;

  span {
    color: var(--highLight);
  }
`