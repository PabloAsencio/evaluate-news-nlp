import { updateUI } from './uiUpdater';
import { isValidURL } from './urlValidator';
import { isValidText } from './textValidator';

function handleSubmit(event) {
    event.preventDefault();

    const formField = document.getElementById('name');
    const errorMessage = document.getElementById('errorMessage');

    // clear the error message in case it was visible
    errorMessage.textContent = '';
    // check what text was put into the form field
    const formText = formField.value.trim();
    const isURL = isValidURL(formText);

    if (isURL || isValidText(formText)) {
        fetch('http://localhost:8081/analyze', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userInput: formText,
                lang: 'en',
                url: isURL,
            }),
        })
            .then((res) => res.json())
            .then(function (res) {
                res['userInput'] = formText;
                updateUI(res);
            });
    } else {
        // input doesn't pass validation: clear input form and show error message
        formField.value = '';
        errorMessage.textContent =
            'Please enter a valid URL or a valid English text';
    }
}

export { handleSubmit };
