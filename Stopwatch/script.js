let timer = document.getElementById('time');
let Interval, timePassed, TimePassed = 0, started = 0;

function startTimer () {
    if (started === 1) return;
    let timeStart = Date.now();
    clearInterval(Interval);
    started = 1;
    Interval = setInterval(() => {
        timePassed = Date.now() - timeStart + TimePassed;        
        timer.innerHTML = formatDate(new Date(timePassed));;
    }, 10);
};

function pauseTimer () {
    clearInterval(Interval);
    TimePassed = timePassed;
    started = 0;
};

function resetTimer () {
    clearTimeout(Interval);
    TimePassed = 0;
    timePassed = 0;
    timer.innerHTML = formatDate(new Date(timePassed));
    started = 0;
};

function formatDate(date) {
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let ms = Math.trunc(date.getUTCMilliseconds() / 10);;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    if (ms < 10) ms = '0' + ms;
    return `${minutes}:${seconds}:${ms}`;
};


document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', pauseTimer)
document.getElementById('resetButton').addEventListener('click', resetTimer);