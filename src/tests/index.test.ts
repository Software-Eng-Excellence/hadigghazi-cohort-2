import * as path from 'path'

describe('Main index.ts execution', () => {
  it('should execute without throwing', async () => {
    const indexPath = path.resolve(__dirname, '../../src/index.ts')
    const result = await import(indexPath)
    expect(result).toBeDefined()
  })
})
