import styled from 'styled-components'
import { layout, space } from 'styled-system'

const Container = styled('div')(layout, space)

Container.defaultProps = {
  px: 4,
  my: 5,
  mx: 'auto',
  maxWidth: 'container'
}

export default Container
