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
    // We only consider the http and https protocols
    const protocol = '(((http|https):\\/\\/)?)';
    // Naive regex for a DNS hostname. In particular we don't accept username and password as part of the DNS name.
    const dnsHostname = '(([A-Za-z0-9\\-]+\\.)+([A-Za-z])+)';
    // For the ipv4 regex see https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    const ipv4Hostname =
        '(((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]{1,2})\\.){3}((25[0-5])|(2[0-4][0-9])|([0-1]?[0-9]{1,2})))';
    // We don't take into consideration neither ipv6 addresses nor localhost for this app.
    const hostname = `(${dnsHostname}|${ipv4Hostname})`;
    // A valid port number must be a number between 0 and 65353. We don't check for reserved ports.
    const port =
        '(:(([0-5]?[0-9]{1,4})|(6535[0-3])|(653[0-4][0-9])|(65[0-2][0-9]{2})|(6[0-4][0-9]{3})))?';
    // Based on RFC3986 https://pretty-rfc.herokuapp.com/RFC3986
    const path =
        "(\\/(([A-Za-z0-9-_~:@\\.!\\$&'\\(\\)\\*\\+,;=])|(%[0-9A-Fa-f]{2}))*)*";
    const query =
        "(\\?(([A-Za-z0-9-_~:@\\.!\\$&'\\?\\/\\(\\)\\*\\+,;=])|(%[0-9A-Fa-f]{2}))*)?";
    const fragment =
        "(#(([A-Za-z0-9-_~:@\\.!\\$&'\\?\\/\\(\\)\\*\\+,;=])|(%[0-9A-Fa-f]{2}))*)?";
    const validURLRegEx = new RegExp(
        '^' + protocol + hostname + port + path + query + fragment + '$',
        'i'
    );
    return validURLRegEx.test(text);
}

export { updateUI };
