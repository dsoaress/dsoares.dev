import { skills } from './skills'

describe('skills', () => {
  it('should has correct properties types', () => {
    skills.forEach(skill => {
      expect(typeof skill).toBe('string')
    })
  })
})
