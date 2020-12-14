jest.mock('../src/client/js/uiUpdater.js');
import { updateUI } from '../src/client/js/uiUpdater';
jest.mock('../src/client/js/urlValidator.js');
import { isValidURL } from '../src/client/js/urlValidator';
jest.mock('../src/client/js/textValidator.js');
import { isValidText } from '../src/client/js/textValidator';

// Mocking fetch. See https://www.leighhalliday.com/mock-fetch-jest
global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => Promise.resolve({ subjectivity: 'OBJECTIVE' }),
    })
);

import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
    beforeEach(() => {
        document.body.innerHTML = `<div>
            <div id="errorMessage"></div>
            <form>
                <input type="text" value="text" id="name">
                <input type="submit" value="submit" id="submit">
            </form>
            <section>
                <strong></strong>
                <div id="results"></div>
            </section>
        </div>`;
        document
            .getElementById('submit')
            .addEventListener('click', handleSubmit);
        fetch.mockClear();
    });
    test('Testing that handleSubmit clears the error message if the input is valid', () => {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent =
            'Please enter a valid URL or a valid English text';
        isValidURL.mockImplementationOnce((value) => true);
        document.getElementById('submit').click();
        expect(errorMessage.textContent).toBe('');
    });
    test('Testing that handleSubmit sets the error message if the input is invalid', () => {
        const errorMessage = document.getElementById('errorMessage');
        document.getElementById('submit').click();
        expect(errorMessage.textContent).toBe(
            'Please enter a valid URL or a valid English text'
        );
    });
    test('Testing that handleSubmit clears the input field if the input is invalid', () => {
        const inputField = document.getElementById('name');
        document.getElementById('submit').click();
        expect(inputField.value).toBe('');
    });
    test('Testing that handleSubmit calls isValidURL with the correct argument', () => {
        document.getElementById('submit').click();
        expect(isValidURL).toHaveBeenCalledWith('text');
    });
    test('Testing that handleSubmit calls isValidText with the correct argument', () => {
        document.getElementById('submit').click();
        expect(isValidText).toHaveBeenCalledWith('text');
    });
    test('Testing that handleSubmit calls fetch', () => {
        isValidURL.mockImplementationOnce((value) => true);
        document.getElementById('submit').click();
        expect(fetch).toHaveBeenCalled();
    });
    test('Testing that handleSubmit calls updateUI', () => {
        isValidURL.mockImplementationOnce((value) => true);
        document.getElementById('submit').click();
        expect(updateUI).toHaveBeenCalled();
    });
});
