/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = props => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'gray'
      }
    }}
  />
)

export default Link
