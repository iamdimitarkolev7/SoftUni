$(() => {
    let details;
    let data;

    async function loadFiles() {
        let contacts = await $.get('templates/list.hbs');
        let contactsTemplate = Handlebars.compile(contacts);

        details = await $.get('templates/details.hbs');
        data = await $.get('data.json');

        let obj = {
            contacts: data
        };

        let table1 = contactsTemplate(obj);
        $("#list").append(table1);
        attachEvents();
    }

    function attachEvents() {
        $(".contact").on("click", function() {
            loadDetails($(this).attr('data-id'))
        })
    }

    loadFiles();

    function loadDetails(index) {
        let detailsTemplate = Handlebars.compile(details);
        let html = detailsTemplate(data[index]);
        $("#details").empty();
        $("#details").append(html);
    }
});