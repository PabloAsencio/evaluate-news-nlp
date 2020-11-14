function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    console.log('::: Form Submitted :::');
    fetch('http://localhost:8081/analyze', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userInput: formText,
            lang: 'en',
        }),
    })
        .then((res) => res.json())
        .then(function (res) {
            console.log(res); // TODO Remove from final version
            document.getElementById('results').innerHTML = res.subjectivity; // TODO Handle the update of ui in a different file
        });
}

export { handleSubmit };
