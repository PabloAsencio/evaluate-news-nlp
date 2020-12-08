function updateUI(analysis) {
    document.getElementById('name').value = '';
    const target = document.getElementById('results');
    target.innerHTML = '';

    const results = document.createDocumentFragment();

    const userInput = document.createElement('P');
    if (analysis.isURL) {
        const anchor = document.createElement('A');
        anchor.setAttribute('href', analysis.userInput);
        anchor.textContent = analysis.userInput;
        userInput.appendChild(anchor);
    } else {
        userInput.textContent = analysis.userInput;
    }
    userInput.classList.add('analysis__input');
    results.appendChild(userInput);

    const scoreTag = document.createElement('P');
    scoreTag.textContent = `Score Tag: ${analysis.scoreTag}`;

    const confidence = document.createElement('P');
    confidence.textContent = `Confidence: ${analysis.confidence}`;

    const irony = document.createElement('P');
    irony.textContent = `${analysis.irony}`;

    const subjectivity = document.createElement('P');
    subjectivity.textContent = `${analysis.subjectivity}`;

    target.appendChild(results);
    target.appendChild(subjectivity);
    target.appendChild(irony);
    target.appendChild(scoreTag);
    target.appendChild(confidence);
}

export { updateUI };
