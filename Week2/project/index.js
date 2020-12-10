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

let timeSec = 1500;

displayTime(timeSec);

function count() {
  const countDown = setInterval(() => {
    timeSec--;
    displayTime(timeSec);

    if (timeSec <= 0 || timeSec < 1) {
      clearInterval(countDown);
      endTime();
    }
  }, 1000);
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min}:${sec}`;
}

function endTime() {
  timeH.innerHTML = "Time 's up!";
}

playBtn.addEventListener('click', count);
stopBtn.addEventListener('click', endTime);

function stopTimer() {}
