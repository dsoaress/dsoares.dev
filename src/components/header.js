import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { border, color, flexbox, layout, typography } from 'styled-system'

import Container from '@components/container'

const Wrapper = styled('header')(border, layout)
const Box = styled('div')(flexbox, layout)
const Link = styled(GatsbyLink)(border, typography)
const Highlight = styled('span')(color)

const Header = () => (
  <Wrapper
    borderTopWidth="10px"
    borderTopColor="primary"
    borderTopStyle="solid"
  >
    <Container>
      <Box display="flex" justifyContent="space-between">
        <Link to="/" alt="Home" fontWeight="heading" fontSize={4} border="none">
          D<Highlight color="primary">Soares</Highlight>
        </Link>

        <Link
          to="/sobre-mim"
          alt="Sobre mim"
          activeClassName="active"
          border="none"
        >
          Sobre mim
        </Link>
      </Box>
    </Container>
  </Wrapper>
)

export default Header
