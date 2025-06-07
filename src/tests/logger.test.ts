import logger from '../util/logger'

describe('Logger', () => {
  it('should have .info and .error methods', () => {
    expect(typeof logger.info).toBe('function')
    expect(typeof logger.error).toBe('function')
  })

  it('should log info without error', () => {
    expect(() => logger.info('Test info')).not.toThrow()
  })

  it('should log error without error', () => {
    expect(() => logger.error('Test error')).not.toThrow()
  })
})
