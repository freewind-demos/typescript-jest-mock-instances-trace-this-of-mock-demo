test('trace this of mock', () => {
  const myMock = jest.fn()

  const a = new myMock();

  const b = {name: 'b'}
  const bound = myMock.bind(b);
  bound();

  expect(myMock.mock.instances).toEqual([a, b])
})
