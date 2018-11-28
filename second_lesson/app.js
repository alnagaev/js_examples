const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;// +90 because of css selector hand transform: rotate(90deg);
    const minutesDegrees = ((minutes/60) * 360) + 90;// +90 because of css selector hand transform: rotate(90deg);
    const hoursDegrees = ((hours/60) * 360) + 90;


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
