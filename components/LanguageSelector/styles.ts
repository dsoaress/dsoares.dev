import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

export const LanguageItem = styled.li`
  margin-right: 8px;

  &:last-child {
    margin: 0;
  }
`
