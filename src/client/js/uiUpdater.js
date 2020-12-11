const fieldsToPrint = {
    userInput: '',
    subjectivity: 'Subjectivity: ',
    irony: 'Irony: ',
    scoreTag: 'Score Tag: ',
    confidence: 'Confidence: ',
};

function updateUI(analysis) {
    document.getElementById('name').value = '';
    const target = document.getElementById('results');
    target.innerHTML = '';

    const results = document.createDocumentFragment();

    populateResults(results, analysis);

    target.appendChild(results);
}

function populateResults(target, analysis) {
    Object.keys(fieldsToPrint).forEach((key) => {
        target.appendChild(createAnalysisElement(key, analysis[key]));
    });
}

function createAnalysisElement(key, value) {
    const newElement = document.createElement('P');
    if (Client.isValidURL(value)) {
        const anchor = document.createElement('A');
        const url = value.startsWith('http') ? value : 'https://' + value;
        anchor.setAttribute('href', url);
        anchor.textContent = url;
        newElement.appendChild(anchor);
    } else {
        newElement.textContent = fieldsToPrint[key] + value;
    }
    newElement.classList.add(`analysis__${key}`);
    return newElement;
}

export { updateUI };
