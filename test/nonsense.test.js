/* eslint-env jest */

test('math test', () => {
  expect(1 + 1).toBe(2)
})

test('using a mock function', () => {
  const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
      callback(items[i])
    }
  }
  const mockback = jest.fn()
  forEach([0, 1], mockback)
  console.log(mockback.mock.calls.length)
  expect(mockback.mock.calls.length).toBe(2)
})
