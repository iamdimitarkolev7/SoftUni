function attachEvents() {
    let location = $("#location");
    let symbol = "";

    $("#submit").on("click", submitData);

    let currentLabel=$(`<div class="label">Current conditions</div>`);
    let upcomingLabel=$(`<div class="label">Three-day forecast</div>`)

    function submitData() {
        $("#forecast").css("display", "block");
        $("#current").empty();
        $("#upcoming").empty();

        $("#current").append(currentLabel);
        $("#upcoming").append(upcomingLabel);

        $.ajax({
            method: "GET",
            url: "https://judgetests.firebaseio.com/locations.json",
        }).then(success).catch(error);

        let myObj = {};

        function success(res) {
            for (let data of res) {
                let name = data.name;
                let code = data.code;

                myObj[name] = code;
                if (name === location.val()) {
                    //current conditions
                    $.ajax({
                        method: "GET",
                        url: `https://judgetests.firebaseio.com/forecast/today/${code}.json`,
                    }).then(function (res) {
                        conditionSymbols(res.forecast.condition);
                        let spanSymbol = $(`<span class="condition symbol">${symbol}</span>`);
                        let spanClassCondition = $(`<span class="condition"></span>`);
                        let spanClasses = $(`<span class="forecast-data">${res.name}</span>
                                            <span class="forecast-data">${res.forecast.low}&#176;/${res.forecast.high}&#176;</span>
                                            <span class="forecast-data">${res.forecast.condition}</span>`);
                        $("#current").append(spanSymbol).append(spanClassCondition.append(spanClasses));
                    }).catch(function (err) {
                        console.log(err);
                    });

                    //three-day forecast
                    $.ajax({
                        method: "GET",
                        url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json `
                    }).then(function (res) {
                        for (let data of res.forecast) {
                            conditionSymbols(data.condition);
                            console.log(data.low + "  " + data.high + "  " + data.condition);
                            let spanClassUpcoming = $(`<span class="upcoming"></span>`);
                            let spanClassesWeather = $(`<span class="symbol">${symbol}</span>
                                                        <span class="forecast-data">${data.low}&#176;/${data.high}&#176;</span>
                                                        <span class="forecast-data">${data.condition}</spanclass>`);
                            $("#upcoming").append(spanClassUpcoming.append(spanClassesWeather));
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }
        }

        function error(err) {
            console.log(err);
        }
    }

    function conditionSymbols(condition) {
        switch (condition) {
            case 'Sunny':
                symbol = '&#x2600;';
                break;
            case 'Partly sunny':
                symbol = '&#x26C5;';
                break;
            case 'Overcast':
                symbol = '&#x2601;';
                break;
            case 'Rain':
                symbol = '&#x2614;';
                break;
            case 'Degrees':
                symbol = '&#176;';
                break;
            default:
                symbol = '';
                break;
        }
    }
}
