const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');

function stopClockTick(){
    clearInterval(clockTick);
}

stopButton.addEventListener('click', stopClockTick);


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

let isRunning = true;

let initiate_clock = function(){
    let second_hand = document.querySelector('#second_hand');
    let minute_hand = document.querySelector('#minute_hand');
    let hour_hand = document.querySelector('#hour_hand');

    let change_hands = function(){
        if(isRunning){
            let current_date = new Date();

            second_hand.style.transform = `rotate(${(current_date.getSeconds() * 6) - 90}deg)`;
            minute_hand.style.transform = `rotate(${(current_date.getMinutes() * 6) - 90}deg)`;
            hour_hand.style.transform = `rotate(${(current_date.getHours() * 6) - 90}deg)`;
        }
        setTimeout(change_hands,1000);
    }
    change_hands();
}
initiate_clock();


let toggleButton = document.getElementById("toggleButton");


toggleButton.addEventListener("click", function () {
    if (isRunning) {
        toggleButton.textContent = "Start";
    } else {
        toggleButton.textContent = "Stop";
    }

    isRunning = !isRunning;
});