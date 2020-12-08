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
    if (isURL(value)) {
        const anchor = document.createElement('A');
        anchor.setAttribute('href', value);
        anchor.textContent = value;
        newElement.appendChild(anchor);
    } else {
        newElement.textContent = fieldsToPrint[key] + value;
    }
    newElement.classList.add(`analysis__${key}`);
    return newElement;
}

function isURL(text) {
    const validURLRegEx = /^(http|https):\/\//i;
    return validURLRegEx.test(text);
}

export { updateUI };
