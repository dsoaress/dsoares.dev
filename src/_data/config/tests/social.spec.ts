import { social } from '../social'

describe('social', () => {
  it('should has required properties', () => {
    social.forEach(social => {
      expect(social).toHaveProperty('label')
      expect(social).toHaveProperty('url')
    })
  })

  it('should has correct properties types', () => {
    social.forEach(social => {
      expect(typeof social.label).toBe('string')
      expect(typeof social.url).toBe('string')
    })
  })
})
