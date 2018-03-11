function timer() {
    $("#start-timer").click(start);
    $("#stop-timer").click(pause);
    let hours = $("#hours")[0];
    let minutes = $("#minutes")[0];
    let seconds = $("#seconds")[0];
    let interval;

    function start() {
        if (!interval) {
            let interval = setInterval(() => {
                if (Number(seconds.textContent) === 59) {
                    seconds.textContent = '00';
                    if (Number(minutes.textContent) === 59) {
                        minutes.textContent = '00';
                        hours.textContent = ('0' + `${Number(hours.textContent) + 1}`).slice(-2);
                    } else {
                        minutes.textContent = ('0' + `${Number(minutes.textContent) + 1}`).slice(-2);
                    }
                } else {
                    seconds.textContent = ('0' + `${Number(seconds.textContent) + 1}`).slice(-2);
                }
            }, 1000);
        }
    }
    function pause() {
        clearInterval(interval);
        interval = false;
    }
}