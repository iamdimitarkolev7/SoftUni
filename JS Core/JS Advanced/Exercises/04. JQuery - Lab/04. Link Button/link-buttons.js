function attachEvents() {
    $('a.button').click(clicked);
    function clicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}
