import { profile } from './profile'

describe('profile', () => {
  it('should has required properties', () => {
    expect(profile).toHaveProperty('title')
    expect(profile).toHaveProperty('shortTitle')
    expect(profile).toHaveProperty('githubUsername')
    expect(profile).toHaveProperty('avatar')
    expect(profile).toHaveProperty('favicon')
    expect(profile.favicon).toHaveProperty('src')
    expect(profile.favicon).toHaveProperty('sizes')
  })

  it('should has correct properties types', () => {
    expect(typeof profile.title).toBe('string')
    expect(typeof profile.shortTitle).toBe('string')
    expect(typeof profile.githubUsername).toBe('string')
    expect(typeof profile.avatar).toBe('string')
    expect(typeof profile.favicon.src).toBe('string')

    profile.favicon.sizes.forEach(size => {
      expect(typeof size).toBe('number')
    })
  })
})
