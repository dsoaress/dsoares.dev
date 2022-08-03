import { config } from '../config'

describe('config', () => {
  it('should has required properties', () => {
    expect(config).toHaveProperty('analytics')
    expect(config).toHaveProperty('colors')
    expect(config).toHaveProperty('locales')
    expect(config).toHaveProperty('profile')
    expect(config).toHaveProperty('skills')
    expect(config).toHaveProperty('social')
    expect(config).toHaveProperty('showResume')
  })

  it('should has correct properties types', () => {
    expect(typeof config.analytics).toBe('object')
    expect(typeof config.colors).toBe('object')
    expect(typeof config.locales).toBe('object')
    expect(typeof config.profile).toBe('object')
    expect(typeof config.skills).toBe('object')
    expect(typeof config.social).toBe('object')
    expect(typeof config.showResume).toBe('boolean')
  })
})
