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

let setMin = 25;
setTime.innerHTML = setMin;
function increaseMin() {
  return (setTime.innerHTML = ++setMin); // what is the difference of ++setMin and setMin++.
}

function decreaseMin() {
  console.log(setMin);
  return (setTime.innerHTML = --setMin); // how to stop number becoming minus?
}

let timeSec = 1500;
let min;
let sec;
let countDown;
displayTime(timeSec);

function count() {
  let countDown = setInterval(() => {
    timeSec--;
    displayTime(timeSec);

    if (timeSec <= 0 || timeSec < 1) {
      clearInterval(countDown);
      endTime();
    }
  }, 1000);
  up.disable = true;
  down.disable = true;
}

function displayTime(second) {
  min = Math.floor(second / 60);
  sec = Math.floor(second % 60);
  timeH.innerHTML = `${min}:${sec}`;
}

function endTime() {
  console.log(`${min}:${sec}`);
  clearInterval(countDown);
  timeH.innerHTML = `${min}:${sec}`;
}

playBtn.addEventListener('click', count);
stopBtn.addEventListener('click', endTime);
up.addEventListener('click', increaseMin);
down.addEventListener('click', decreaseMin);
