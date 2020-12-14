import { updateUI } from './uiUpdater';
import { isValidURL } from './urlValidator';

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    const formText = document.getElementById('name').value;
    const isURL = isValidURL(formText);

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
}

export { handleSubmit };
