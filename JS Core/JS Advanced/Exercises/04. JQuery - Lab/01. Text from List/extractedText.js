function extractText() {
    let result = [];
    $('#items li').each((index, element) => {
        result.push(element.textContent);
    });
    $('#result').text(result.join(', '));
}