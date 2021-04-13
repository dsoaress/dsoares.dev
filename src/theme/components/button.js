export default {
  baseStyle: {
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '100%',
    padding: '32px'
  },
  variants: {
    solid: {
      bg: 'highlight',
      _hover: {
        bg: 'hover'
      },
      color: 'white'
    }
  },
  defaultProps: {
    variant: 'solid'
  }
}
