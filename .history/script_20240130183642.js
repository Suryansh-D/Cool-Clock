

const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const ToDobutton = document.getElementById('ToDobutton');
const ToDoContainer = document.getElementById('ToDoContainer');
const Clock = do
ToDoContainer.style.display = 'none';
ToDobutton.addEventListener('click', () => {
    ToDoContainer.style.display = 'block';

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



let clockInterval;

function startClock() {
    clockInterval = setInterval(clockTick, 1000);
    console.log('start');
}

function stopClock() {
    clearInterval(clockInterval);
    console.log('stop');
}
startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);

// To Do

const taskInput = document.getElementById('task-input');
const timeInput = document.getElementById('time-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const task = taskInput.value;
  const time = timeInput.value;

  if (task) {
    const listItem = document.createElement('li');
    listItem.textContent = task + ' - ' + time;
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', () => listItem.remove());
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    timeInput.value = '';
  }
}
