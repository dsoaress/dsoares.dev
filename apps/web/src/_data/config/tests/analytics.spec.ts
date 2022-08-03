import { analytics } from '../analytics'

describe('analytics', () => {
  it('should has required properties', () => {
    expect(analytics).toHaveProperty('domain')
    expect(analytics).toHaveProperty('id')
    expect(analytics).toHaveProperty('src')
  })

  it('should has correct properties types', () => {
    expect(typeof analytics.domain).toBe('string')
    expect(typeof analytics.id).toBe('string')
    expect(typeof analytics.src).toBe('string')
  })
})
