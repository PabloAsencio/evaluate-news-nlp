jest.mock('../src/client/js/urlValidator');
import { isValidURL } from '../src/client/js/urlValidator';

import { updateUI } from '../src/client/js/uiUpdater';

const analysis = {
    userInput: 'This is fine',
    subjectivity: 'OBJECTIVE',
    irony: 'NONIRONIC',
    scoreTag: 'P',
    confidence: 100,
};

describe('Testing the ui update functionality', () => {
    beforeEach(() => {
        document.body.innerHTML = `<div>
            <form>
                <input type="text" value="text" id="name">
                <input type="submit" value="submit">
            </form>
            <section>
                <strong></strong>
                <div id="results"></div>
            </section>
        </div>`;
    });
    test('Testing that the value of the form is cleared', () => {
        const name = document.getElementById('name');
        expect(name.value).toBe('text');
        isValidURL.mockImplementationOnce((value) => false);
        updateUI(analysis);
        expect(name.value).toBe('');
    });
    test('Testing that there is a title for the results', () => {
        const title = document.getElementsByTagName('strong')[0];
        expect(title.textContent).toBe('');
        isValidURL.mockImplementationOnce((value) => false);
        updateUI(analysis);
        expect(title.textContent).toBe('Analysis Results:');
    });
    test('Testing that the user input is correctly shown', () => {
        isValidURL.mockImplementationOnce((value) => false);
        updateUI(analysis);
        const userInput = document.getElementsByClassName(
            'analysis__userInput'
        )[0];
        expect(userInput).toBeDefined();
        expect(userInput.textContent).toBe(analysis.userInput);
    });
    test('Testing that the user input is correctly shown when it is a URL', () => {
        const url = 'https://www.google.com';
        isValidURL.mockImplementationOnce((value) => true);
        updateUI(Object.assign({}, analysis, { userInput: url }));
        const userInput = document
            .getElementsByClassName('analysis__userInput')[0]
            .getElementsByTagName('a')[0];
        expect(userInput).toBeDefined();
        expect(userInput.textContent).toBe(url);
    });
});
