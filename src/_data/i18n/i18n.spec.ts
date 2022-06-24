import { i18n } from './i18n'

describe('i18n', () => {
  it('should has required properties', () => {
    expect(i18n).toHaveProperty('en')
    expect(i18n).toHaveProperty('es')
    expect(i18n).toHaveProperty('pt')
  })

  it('should has correct properties types', () => {
    expect(typeof i18n.en).toBe('object')
    expect(typeof i18n.es).toBe('object')
    expect(typeof i18n.pt).toBe('object')
  })
})
