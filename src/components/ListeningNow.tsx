import { SiApplemusic } from 'react-icons/si'

import { Text } from '@/components'
import { useCurrentTrack } from '@/hooks/useCurrentTrack'
import { useData } from '@/hooks/useData'

export function ListeningNow() {
  const { t } = useData()
  const currentTrack = useCurrentTrack()

  return (
    <div className="h-10 space-y-2 text-center">
      {!!currentTrack?.title && (
        <>
          <Text as="span" size="xs" className="flex items-center justify-center gap-2" faded>
            <SiApplemusic />
            {t.listeningNow}
          </Text>
          <Text size="xs">
            {currentTrack?.title} - {currentTrack?.artist} ({currentTrack?.album}) |{' '}
            {currentTrack?.duration}
          </Text>
        </>
      )}
    </div>
  )
}
