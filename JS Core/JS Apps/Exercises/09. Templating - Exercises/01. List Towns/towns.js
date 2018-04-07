function attachEvents() {
    $("#btnLoadTowns").on("click", function () {
        let data = $("#towns").val();
        data.toString();
        let towns = data.split(', ')
            .filter(el => el !== '')
            .map(el => ({
                town: el
            }));

        loadTowns(towns);

        $("#towns").val('');
    });

    async function loadTowns(towns) {
        $("#root").empty();
        let source = await $.get('template.hbs');
        let template = Handlebars.compile(source);
        let html = template({towns});
        $("#root").append(html);
    }
}