import { isValidText } from '../src/client/js/textValidator';

describe('Testing the text validation functionality', () => {
    test('Testing a valid text', () => {
        expect(isValidText('This is some text')).toBe(true);
    });
    test('Testing a text with some js in it', () => {
        expect(isValidText('<script>alert("XSS");</script>')).toBe(false);
    });
    test('Testing a url', () => {
        expect(isValidText('https://www.google.com')).toBe(false);
    });
});
