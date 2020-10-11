/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@components/container'
import Link from '@components/link'

const Header = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings {
          title
        }
      }
    `
  )
  const title = sanitySiteSettings.title
    .split(/(\s+)/)
    .filter(e => e.trim().length > 0)

  return (
    <header
      sx={{
        variant: 'styles.header',
        borderTop: '10px solid',
        borderColor: 'gray'
      }}
    >
      <Container>
        <Link
          to="/"
          alt="Home"
          sx={{
            variant: 'styles.navlink',
            fontSize: 5,
            py: 2
          }}
        >
          {title[0]}
          <span>{title[1]}</span>
        </Link>

        <Link
          to="/sobre-mim"
          alt="Sobre mim"
          activeClassName="active"
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 2
          }}
        >
          Sobre mim
        </Link>
      </Container>
    </header>
  )
}

export default Header
