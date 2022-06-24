import { projects } from './projects'

describe('projects', () => {
  it('should has required properties', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project.description).toHaveProperty('en')
      expect(project.description).toHaveProperty('es')
      expect(project.description).toHaveProperty('pt')
      expect(project).toHaveProperty('tags')
      expect(project).toHaveProperty('repo')
      expect(project).toHaveProperty('repositoryUrl')
      expect(project).toHaveProperty('cover')
    })
  })

  it('should has correct properties types', () => {
    projects.forEach(project => {
      expect(typeof project.title).toBe('string')
      expect(typeof project.description.en).toBe('string')
      expect(typeof project.description.es).toBe('string')
      expect(typeof project.description.pt).toBe('string')
      expect(typeof project.tags).toBe('string')
      expect(typeof project.repo).toBe('string')
      expect(typeof project.repositoryUrl).toBe('string')
      expect(typeof project.cover).toBe('string')
    })
  })
})
