function search() {
    let targetValue = $('#searchText').val();
    let counter = 0;
    $('#towns').find('li').each((index, element) => {
        if (element.textContent.includes(targetValue)) {
            $(element).css('font-weight', 'bold');
            counter++;
        }
    });
    $('#result').text(counter + " matches found.");
}