import { en } from './en'

describe('en', () => {
  it('should has required properties', () => {
    expect(en).toHaveProperty('listeningNow')
    expect(en).toHaveProperty('resume')
    expect(en.resume).toHaveProperty('title')
    expect(en.resume).toHaveProperty('file')
    expect(en).toHaveProperty('description')
    expect(en).toHaveProperty('projects')
    expect(en.projects).toHaveProperty('title')
    expect(en.projects).toHaveProperty('description')
    expect(en).toHaveProperty('errors')
    expect(en.errors).toHaveProperty('notFound')
    expect(en.errors).toHaveProperty('internalError')
    expect(en.errors).toHaveProperty('buttonLabel')
    expect(en).toHaveProperty('footer')
  })

  it('should has correct properties types', () => {
    expect(typeof en.listeningNow).toBe('string')
    expect(typeof en.resume.title).toBe('string')
    expect(typeof en.resume.file).toBe('string')
    expect(typeof en.description).toBe('string')
    expect(typeof en.projects.title).toBe('string')
    expect(typeof en.projects.description).toBe('string')
    expect(typeof en.errors.notFound).toBe('string')
    expect(typeof en.errors.internalError).toBe('string')
    expect(typeof en.errors.buttonLabel).toBe('string')
    expect(typeof en.footer).toBe('string')
  })
})
