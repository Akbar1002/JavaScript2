/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

const timeH = document.querySelector('#timer');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const up = document.getElementById('up');
const setTime = document.getElementById('setTime');
const down = document.getElementById('down');

let timeSec = 1500;
let setMin = 25;
let loading = false;
setTime.innerHTML = setMin;

function increaseMin() {
  if (loading) return;
  ++setMin;
  setTime.innerHTML = setMin;
  timeH.innerHTML = setMin;
  timeSec = 60 * setMin;
}

function decreaseMin() {
  if (loading) return;
  --setMin;
  if (setMin < 1) return;
  setTime.innerHTML = setMin;
  timeH.innerHTML = setMin;
  timeSec = 60 * setMin;
}

let min;
let sec;
let countDown;
displayTime(timeSec);

function count() {
  loading = true;
  countDown = setInterval(() => {
    timeSec--;
    displayTime(timeSec);

    if (timeSec <= 0 || timeSec < 1) {
      endTime();
    }
  }, 1000);
}

function displayTime(second) {
  min = Math.floor(second / 60);
  sec = Math.floor(second % 60);
  const zeroSec = sec < 10 ? '0' : '';
  const zeroMin = min < 10 ? '0' : '';
  timeH.innerHTML = `${zeroMin}${min}:${zeroSec}${sec}`;
}

function endTime() {
  timeH.innerHTML = 'Time is Up!';
}

function pauseTime() {
  loading = false;
  clearInterval(countDown);
}

playBtn.addEventListener('click', count);
stopBtn.addEventListener('click', pauseTime);
up.addEventListener('click', increaseMin);
down.addEventListener('click', decreaseMin);
