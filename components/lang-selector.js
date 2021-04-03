import { useRouter } from 'next/router'
import { List, ListItem, Stack } from '@chakra-ui/react'
import Link from '@/components/link'

export default function LangSelector() {
  const router = useRouter()
  const { locale, locales, pathname } = router
  return (
    <List>
      <Stack direction="row" spacing={2}>
        {locales.map((localeItem, i) => (
          <ListItem textTransform="uppercase" key={i}>
            <Link
              href={pathname}
              locale={localeItem}
              fontSize="sm"
              fontWeight="bold"
              color={locale === localeItem ? 'highlight' : 'default'}
              _hover={{ color: 'hover' }}
            >
              [{localeItem}]
            </Link>
          </ListItem>
        ))}
      </Stack>
    </List>
  )
}
