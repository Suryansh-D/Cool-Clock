// Function to update the clock hands and digital time
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours * 60 + minutes) / (12 * 60) * 360;
    const minuteAngle = minutes / 60 * 360;
    const secondAngle = seconds / 60 * 360;

    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const digitalTime = document.getElementById("digital-time");

    hourHand.style.transform = `rotate(<span class="math-inline">\{hourAngle\}deg\)\`;
minuteHand\.style\.transform \= \`rotate\(</span>{minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${
