const URL = "https://phonebook-kolev.firebaseio.com/phonebook";

$("#btnLoad").on("click", loadData);
$("#btnCreate").on("click", createData);

function loadData(){
    $("#phonebook").empty();
    $.ajax({
        method: "GET",
        url: URL + ".json",

    }).then(handleSuccess).catch(handleError);

    function handleSuccess(res) {
        for (let key in res) {
            let li = $(`<li>${res[key].name}: ${res[key].phone} </li> `)
                .append($(`<a href="#">[Delete]</a>`)
                    .click(function () {
                        $.ajax({
                            method: "DELETE",
                            url: URL + '/' + key + '.json'
                        }).then(() => $(li).remove()).catch(handleError)
                    }));
            $("#phonebook").append(li);
        }
    }
}

function createData() {
    let name = $("#person").val();
    let phone =  $("#phone").val();

    let newData = JSON.stringify({name, phone});

    $.ajax({
        method: "POST",
        url: URL + "" +".json",
        data: newData,
        success: appendElement,
        error: handleError
    });

    function appendElement(res) {
        let li = $(`<li>${name}: ${phone} </li> `)
            .append($(`<a href="#">[Delete]</a>`)
                .click(function () {
                    $.ajax({
                        method: "DELETE",
                        url: URL + '/' + res.name + '.json'
                    }).then(() => $(li).remove()).catch(handleError)
                }));
        $("#phonebook").append(li);
    }

    $("#person").val("");
    $("#phone").val("");
}

function handleError(err) {
    console.log(err);
}