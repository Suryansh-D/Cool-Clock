const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');

const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');

function clockTick() {
  // Your clock tick logic goes here
}

let intervalId;

function startClock() {
  clockTick(); // To immediately update the clock when start is clicked
  intervalId = setInterval(clockTick, 1000);
}

function stopClock() {
  clearInterval(intervalId);
}

startButton.addEventListener('click', startClock);

stopButton.addEventListener('click', stopClock);


function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const mins = (seconds + date.getMinutes())/60;
    const hours = (mins + date.getHours())/12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minsHand, mins);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);