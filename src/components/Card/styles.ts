import { styled, theme } from '@/styles/stitches.config'

export const Wrapper = styled('div', {
  position: 'relative',
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${theme.colors.neutral800}`,
  borderRadius: theme.radii.md,

  '&:hover': {
    background: theme.colors.neutral800,
    transform: 'translateY(-0.25rem)',
    boxShadow: theme.shadows.default
  }
})

export const ImageCover = styled('div', {
  position: 'relative',
  height: theme.sizes[64],
  overflow: 'hidden',
  borderTopLeftRadius: theme.radii.md,
  borderTopRightRadius: theme.radii.md
})

export const Container = styled('div', {
  display: 'grid',
  gap: theme.sizes[4],
  padding: theme.space[6]
})
