export default jest.mock('@/hooks/useCurrentTrack', () => ({
  useCurrentTrack: () => ({
    title: 'title',
    artist: 'artist',
    album: 'album',
    duration: '05:00'
  })
}))
