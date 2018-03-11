function increment(selector) {
    let value = 0;
    let textarea = $('<textarea>')
        .addClass("counter")
        .val(value)
        .prop('disabled', true);
    $(selector).append(textarea);
    let incrementButton = $('<button class="btn" id="incrementBtn">Increment</button>')
        .on('click', increment);
    $(selector).append(incrementButton);
    let addButton = $('<button class="btn" id="addBtn">Add</button>')
        .on('click', add);
    $(selector).append(addButton);
    let ul = $('<ul>')
        .addClass("results");
    $(selector).append(ul);

    function increment() {
        $(textarea).val(++value);
    }
    function add() {
        let li = $(`<li>${value}</li>`);
        $('ul').append(li);
    }
}