import * as polaris from './index'

function init () {
  polaris.initApp({
    getProperties: () => ({ a: 1, b: 2 }),
    setProperties: (x) => {},
  })
}

describe('Polaris App SDK', () => {
  test('should init correctly', () => {
    expect(init()).not.toThrow()
  })
})
