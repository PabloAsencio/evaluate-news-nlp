import { isValidURL } from '../src/client/js/urlValidator';

describe('Testing the url validation functionality', () => {
    test('Testing a valid url with protocol and hostname', () => {
        expect(isValidURL('https://www.google.com')).toBe(true);
    });
    test('Testing a valid url with protocol, hostname, port, path, query and fragment', () => {
        expect(
            isValidURL(
                'https://www.google.com/search/engine.php?query=%89%3f#main'
            )
        ).toBe(true);
    });
    test('Testing an invalid url', () => {
        expect(isValidURL('google')).toBe(false);
    });
});
