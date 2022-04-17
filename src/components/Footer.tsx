import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import { styled } from '@/styles/stitches'

const Wrapper = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  my: 48
})

export function Footer() {
  const { t } = useData()

  return (
    <Wrapper>
      <Social />
      <Text size="sm" center faded css={{ marginTop: 24 }}>
        {t.footer}
      </Text>
    </Wrapper>
  )
}
