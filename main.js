let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let paused = false;
let savedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function startStop() {
    if (!running) {
        if (!paused) {
            startTime = new Date().getTime() - savedTime;
        } else {
            startTime = new Date().getTime() - savedTime;
            paused = false;
        }
        tInterval = setInterval(getShowTime, 1);
        startStopButton.innerHTML = "Pause";
        running = true;
    } else {
        clearInterval(tInterval);
        savedTime = difference;
        startStopButton.innerHTML = "Start";
        running = false;
        paused = true;
    }
}

function reset() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    startStopButton.innerHTML = "Start";
    running = false;
    paused = false;
    savedTime = 0;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
