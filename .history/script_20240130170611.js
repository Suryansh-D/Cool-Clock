

const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');

function stopClock(){
    rotateClockHand = setInterval(clockTick, 1000);
}

stopButton.addEventListener('click', () => {
    stopClock();
});

function startClock(){
  rotateClockHand = setInterval(clockTick, 1000);
}
startButton.addEventListener('click', () => {
    startClock();
});


startButton.addEventListener('mouseenter', () => {
    startButton.style.backgroundColor = 'lightgreen';
}
);
startButton.addEventListener('mouseleave', () => {
    startButton.style.backgroundColor = 'skyblue'

}
);
stopButton.addEventListener('mouseenter', () => {
    stopButton.style.backgroundColor = 'red';
}
);
stopButton.addEventListener('mouseleave', () => {
    stopButton.style.backgroundColor = 'skyblue';
}
);
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    clockTick();
}
);

stopButton.addEventListener('click', () => {
    stopButton.style.display = 'none';
    startButton.style.display = 'inline-block';
}
);
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

