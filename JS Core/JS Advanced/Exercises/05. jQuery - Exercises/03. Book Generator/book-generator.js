function createBook(selector, title, author, isbn) {
    let div = $(selector);
    let id = 1;
    let innerDiv = $(`<div id="book${id++}" style="border: medium none">`);
    let pTitle = $(`<p class="title">${title}</p>`);
    let pAuthor = $(`<p class="author">${author}</p>`);
    let pISBN = $(`<p class="isbn">${isbn}</p>`);
    let buttonSelect = $(`<button>Select</button>`).on('click', action1);
    let buttonDeselect = $(`<button>Deselect</button>`).on('click', action2);
    div.append(innerDiv
            .append(pTitle)
            .append(pAuthor)
            .append(pISBN)
            .append(buttonSelect)
            .append(buttonDeselect));
    function action1() {
        $(this).parent().css('border', '2px solid blue');
    }
    function action2() {
        $(this).parent().css('border', 'none');
    }
}
