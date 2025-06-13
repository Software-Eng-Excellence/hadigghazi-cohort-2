import logger from '../util/logger'

describe('Logger Utility', () => {
  it('should have all standard log levels', () => {
    expect(logger).toHaveProperty('info')
    expect(logger).toHaveProperty('warn')
    expect(logger).toHaveProperty('error')
    expect(logger).toHaveProperty('debug')
  })

  it('should log an info message without throwing', () => {
    expect(() => logger.info('Test info log')).not.toThrow()
  })

  it('should log a warning message without throwing', () => {
    expect(() => logger.warn('Test warn log')).not.toThrow()
  })

  it('should log an error message without throwing', () => {
    expect(() => logger.error('Test error log')).not.toThrow()
  })

  it('should log a debug message without throwing', () => {
    expect(() => logger.debug('Test debug log')).not.toThrow()
  })
})
