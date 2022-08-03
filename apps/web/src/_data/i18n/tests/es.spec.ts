import { es } from '../es'

describe('es', () => {
  it('should has required properties', () => {
    expect(es).toHaveProperty('listeningNow')
    expect(es).toHaveProperty('resume')
    expect(es.resume).toHaveProperty('title')
    expect(es.resume).toHaveProperty('file')
    expect(es).toHaveProperty('description')
    expect(es).toHaveProperty('projects')
    expect(es.projects).toHaveProperty('title')
    expect(es.projects).toHaveProperty('description')
    expect(es).toHaveProperty('errors')
    expect(es.errors).toHaveProperty('notFound')
    expect(es.errors).toHaveProperty('internalError')
    expect(es.errors).toHaveProperty('buttonLabel')
    expect(es).toHaveProperty('footer')
  })

  it('should has correct properties types', () => {
    expect(typeof es.listeningNow).toBe('string')
    expect(typeof es.resume.file).toBe('string')
    expect(typeof es.description).toBe('string')
    expect(typeof es.projects.title).toBe('string')
    expect(typeof es.projects.description).toBe('string')
    expect(typeof es.errors.notFound).toBe('string')
    expect(typeof es.errors.internalError).toBe('string')
    expect(typeof es.errors.buttonLabel).toBe('string')
    expect(typeof es.footer).toBe('string')
  })
})
