import { isValidURL } from '../src/client/js/urlValidator';

describe('Testing the url validation functionality', () => {
    test('Testing the isValidURL function', () => {
        expect(isValidURL).toBeDefined();
    });
});
