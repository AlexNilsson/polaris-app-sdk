import * as polaris from './index'

describe('Polaris App SDK', () => {
  test('should init correctly', () => {
    expect(() => {
      polaris.initApp({
        getProperties: () => ({ a: 1, b: 2 }),
        setProperties: (x) => {},
      })
    }).not.toThrow()
  })
})
