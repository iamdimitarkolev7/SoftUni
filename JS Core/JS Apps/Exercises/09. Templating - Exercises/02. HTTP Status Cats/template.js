$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let cats = window.cats; // context
        console.log(cats);

        let source = await $.get('template.hbs');
        let template = Handlebars.compile(source);
        let html = template({
            cats
        });

        $('body').append(html);

        $(".btn-primary").on("click", function (el) {
            let targetBtn = $(el.target);
            let innerDiv = targetBtn.next();

            if (targetBtn.text() === 'Show status code') {
                innerDiv.css('display', 'block');
                targetBtn.text('Hide status code');
            } else {
                innerDiv.css('display', 'none');
                targetBtn.text('Show status code');
            }
        });
    }
});
