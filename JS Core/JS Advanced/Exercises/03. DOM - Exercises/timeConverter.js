function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {
        hours.value = days.value * 24;
        minutes.value = days.value * 1440;
        seconds.value = days.value * 86400;
    });
    document.getElementById('hoursBtn').addEventListener('click', () => {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
    });
    document.getElementById('minutesBtn').addEventListener('click', () => {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    });
    document.getElementById('secondsBtn').addEventListener('click', () => {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600;
        minutes.value = seconds.value / 60;
    });
}
