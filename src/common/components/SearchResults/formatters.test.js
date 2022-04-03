import { formatMetaCriticScore, formatString } from 'common/components/SearchResults/formatters';

describe('formatters', () => {
  describe('formatString', () => {
    test('should return input string value', () => {
      const inputValue = 'hello world';
      const actual = formatString(inputValue);

      expect(actual)
        .toBe(inputValue);
    });
  });

  describe('formatMetaCriticScore', () => {
    test.each`
    input   | expected  | testName
    ${'0'}  | ${''}     | ${'empty string when value is "0"'}
    ${'50'} | ${'50'}   | ${'should return input value when value is not "0"'}
    `('should return $testName', ({
      input,
      expected,
    }) => {
      const actual = formatMetaCriticScore(input);
      expect(actual)
        .toBe(expected);
    });
  });
});
