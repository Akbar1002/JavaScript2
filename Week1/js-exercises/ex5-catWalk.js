/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
img2.style.display = 'none';
let distance = -img1.width;
let time = 500;
let catWalkingTimer = setInterval(moveCat, time);

function moveCat() {
  distance += 25;
  img1.style.left = `${distance}px`;
  if (distance >= window.innerWidth) {
    distance = -img1.width;
  }
  if (
    distance >= (window.innerWidth - img1.width) / 2 &&
    distance < (window.innerWidth - img1.width) / 2 + 25
  ) {
    clearInterval(catWalkingTimer);
    img2.style.left = `${distance}px`;
    img2.style.display = 'unset';
    img1.style.display = 'none';
    setTimeout(() => {
      img1.style.display = 'unset';
      img2.style.display = 'none';
      catWalkingTimer = setInterval(moveCat, time);
    }, 5000);
  }
}

// fixed all mistakes but could not able to  commit properly//
