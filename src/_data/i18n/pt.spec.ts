import { pt } from './pt'

describe('en', () => {
  it('should has required properties', () => {
    expect(pt).toHaveProperty('listeningNow')
    expect(pt).toHaveProperty('resume')
    expect(pt.resume).toHaveProperty('title')
    expect(pt.resume).toHaveProperty('file')
    expect(pt).toHaveProperty('description')
    expect(pt).toHaveProperty('projects')
    expect(pt.projects).toHaveProperty('title')
    expect(pt.projects).toHaveProperty('description')
    expect(pt).toHaveProperty('errors')
    expect(pt.errors).toHaveProperty('notFound')
    expect(pt.errors).toHaveProperty('internalError')
    expect(pt.errors).toHaveProperty('buttonLabel')
    expect(pt).toHaveProperty('footer')
  })

  it('should has correct properties types', () => {
    expect(typeof pt.listeningNow).toBe('string')
    expect(typeof pt.resume.title).toBe('string')
    expect(typeof pt.resume.file).toBe('string')
    expect(typeof pt.description).toBe('string')
    expect(typeof pt.projects.title).toBe('string')
    expect(typeof pt.projects.description).toBe('string')
    expect(typeof pt.errors.notFound).toBe('string')
    expect(typeof pt.errors.internalError).toBe('string')
    expect(typeof pt.errors.buttonLabel).toBe('string')
    expect(typeof pt.footer).toBe('string')
  })
})
