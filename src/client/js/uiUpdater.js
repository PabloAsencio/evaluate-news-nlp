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
    scoreTag.classList.add('analysis__score-tag');
    results.appendChild(scoreTag);

    const confidence = document.createElement('P');
    confidence.textContent = `Confidence: ${analysis.confidence}`;
    confidence.classList.add('analysis__confidence');
    results.appendChild(confidence);

    const irony = document.createElement('P');
    irony.textContent = `${analysis.irony}`;
    irony.classList.add('analysis__irony');
    results.appendChild(irony);

    const subjectivity = document.createElement('P');
    subjectivity.textContent = `${analysis.subjectivity}`;
    subjectivity.classList.add('analysis__subjectivity');
    results.appendChild(subjectivity);

    target.appendChild(results);
}

export { updateUI };
