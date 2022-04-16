export type CurrentTrack = {
  isPlaying: boolean
  track: {
    id: number
    title: string
    artist: string
    album: string
    duration: string
  }
}
