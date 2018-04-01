function attachEvents() {
    const URL = "https://baas.kinvey.com/appdata/kid_HJTvnHAqG/biggestCatches";
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization":"Basic " + base64Auth};

    $(".load").on("click", listCatches);
    $(".add").on("click", addCatch);
    
    function listCatches() {
        $.ajax({
            method: "GET",
            url: URL,
            headers: authHeaders
        }).then(handleSuccess).catch(handleError);

        function handleSuccess(res) {
            $("#catches").empty();

            for (let _catch of res) {
                let currentCatch = $(`<div class="catch" data-id="${_catch._id}"></div>`);

                currentCatch
                    .append($('<label>Angler</label>'))
                    .append($(`<input type="text" class="angler" value="${_catch.angler}">`))
                    .append($('<label>Weight</label>'))
                    .append($(`<input type="number" class="weight" value="${Number(_catch.weight)}">`))
                    .append($('<label>Species</label>'))
                    .append($(`<input type="text" class="species" value="${_catch.species}">`))
                    .append($('<label>Location</label>'))
                    .append($(`<input type="text" class="location" value="${_catch.location}">`))
                    .append($('<label>Bait</label>'))
                    .append($(`<input type="text" class="bait" value="${_catch.bait}">`))
                    .append($('<label>Capture Time</label>'))
                    .append($(`<input type="number" class="captureTime" value="${Number(_catch.captureTime)}">`))
                    .append($(`<button class="update">Update</button>`).on("click", updateCatch))
                    .append($(`<button class="delete">Delete</button>`).on("click", deleteCatch));

                $("#catches").append(currentCatch);
            }
        }
    }

    function addCatch() {
        let container = $(this).parent();
        console.log($(this));
        console.log(container);

        let newCatch=JSON.stringify({
            angler:container.find('.angler').val(),
            weight:Number(container.find('.weight').val()),
            species:container.find('.species').val(),
            location:container.find('.location').val(),
            bait:container.find('.bait').val(),
            captureTime:Number(container.find('.captureTime').val())
        });

        $.ajax({
            method: "POST",
            url: URL,
            headers: authHeaders,
            data: newCatch,
            success: listCatches,
            error: handleError
        });

        container.find('.angler').val('');
        container.find('.weight').val('');
        container.find('.species').val('');
        container.find('.location').val('');
        container.find('.bait').val('');
        container.find('.captureTime').val('');
    }

    function updateCatch() {
        let container=$(this).parent();
        let searchedId=$(this).parent().attr('data-id');

        let changedCatch=JSON.stringify({
            angler:container.find('.angler').val(),
            weight:Number(container.find('.weight').val()),
            species:container.find('.species').val(),
            location:container.find('.location').val(),
            bait:container.find('.bait').val(),
            captureTime:Number(container.find('.captureTime').val())
        });

        let request={
            url: URL+ '/' + searchedId,
            method:'PUT',
            data:changedCatch,
            headers: authHeaders,
            success:listCatches,
            error:handleError
        };

        $.ajax(request);
    }

    function deleteCatch() {
        let searchedId = $(this).parent().attr('data-id');

        let request = {
            url: URL + '/' + searchedId,
            method:'DELETE',
            headers: authHeaders,
            success:listCatches,
            error: handleError
        };
        $.ajax(request);
    }

    function handleError(err) {
        alert('Error: ' + err.statusText);
    }
}