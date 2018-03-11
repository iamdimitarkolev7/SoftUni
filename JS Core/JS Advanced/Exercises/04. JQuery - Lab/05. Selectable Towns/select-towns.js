function attachEvents() {
    $('#items  li').on('click', colorize);
    function colorize() {
        if (!$(this).attr('data-selected')) {
            $(this).attr('data-selected', true);
            $(this).css('backgroundColor', '#DDD');
        } else {
            $(this).removeAttr('data-selected');
            $(this).css('backgroundColor', '');
        }
    }
    $('#showTownsButton').on('click', showT);
    function showT() {
        let result = $('#items  li[data-selected]')
            .toArray()
            .map(li => li.textContent)
            .join(', ');
        $('#selectedTowns').text('Selected towns: ' + result);
    }
}