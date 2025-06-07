import config from '../config'

describe('Config', () => {
  it('should have default values', () => {
    expect(config.NODE_ENV).toBeDefined()
    expect(config.logDir).toBe('./logs')
  })
})
