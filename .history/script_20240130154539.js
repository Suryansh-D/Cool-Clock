const secondHand = document.querySelectorbyId('.second-hand');
const minsHand = document.querySelectorbyId('.minute-hand');
const hourHand = document.querySelectorbyId('.hour-hand');


function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const mins = (seconds + date.getMinutes())/60;
    const hours = (mins + date.getHours())/12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minsHand, mins);
    
}