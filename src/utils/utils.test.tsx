import { htmlToString } from '.';

describe('utils', () => {
  describe('htmlToString', () => {
    it('should remove HTML tags from a string', () => {
      const input = '<p>Hello <b>World</b>!</p>';
      const expected = 'Hello World!';
      expect(htmlToString(input)).toBe(expected);
    });

    it('should return its input is not a string', () => {
      expect(htmlToString(null)).toBe(null);
      expect(htmlToString(undefined)).toBe(undefined);
    });

    it('should handle strings without HTML tags', () => {
      const input = 'Just a plain string';
      expect(htmlToString(input)).toBe(input);
    });

    it('should decode HTML-encoded strings', () => {
      const encoded = 'Just a plain string &amp; some encoded stuff';
      const decoded = 'Just a plain string & some encoded stuff';
      expect(htmlToString(encoded)).toBe(decoded);
    });
  });
});
