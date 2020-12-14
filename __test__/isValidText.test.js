import { isValidText } from '../src/client/js/textValidator';

describe('Testing the text validation functionality', () => {
    test('Testing a valid text', () => {
        expect(isValidText('This is some text')).toBe(true);
    });
    test('Test a text including punctuation', () => {
        expect(
            isValidText(
                'Text including punctuation, such as this one, should be valid as well.'
            )
        ).toBe(true);
    });
    test('Testing text with an apostrophe in it', () => {
        expect(isValidText("Text like this shouldn't be rejected")).toBe(true);
    });
    test('Testing text with numbers', () => {
        expect(isValidText('$100,000 is 50.0% of $200,000.00')).toBe(true);
    });
    test('Testing a text with some js in it', () => {
        expect(isValidText('<script>alert("XSS");</script>')).toBe(false);
    });
    test('Testing a url', () => {
        expect(isValidText('https://www.google.com')).toBe(false);
    });
});
