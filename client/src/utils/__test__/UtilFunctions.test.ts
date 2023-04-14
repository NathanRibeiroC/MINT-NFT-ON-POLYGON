import isEmpty from '../isEmpty';

describe('Testing isEmpty module', () => {
  test.each([
    { fInput: 1, expected: false },
    { fInput: '', expected: true },
    { fInput: undefined, expected: true },
    { fInput: null, expected: true },
    { fInput: [], expected: true },
    { fInput: 'asdas', expected: false },
  ])('.isEmpty($fInput)', ({ fInput, expected }) => {
    expect(isEmpty(fInput)).toBe(expected);
  });
});
