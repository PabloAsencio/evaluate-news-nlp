function updateUI(analysis) {
    console.log('UI updated');
    document.getElementById('name').value = '';
    document.getElementById('results').innerHTML = analysis.subjectivity;
}

export { updateUI };
