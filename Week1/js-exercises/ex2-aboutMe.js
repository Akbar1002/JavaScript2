/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

const mainText = document.body;
mainText.style.fontFamily = 'Arial, sans-serif';

const name = document.getElementById('nickname');
name.innerText = 'AK';

const food = document.getElementById('fav-food');
food.innerText = 'POLO';

const homeTown = document.getElementById('hometown');
homeTown.innerText = 'AKSU';

const listItems = document.getElementsByTagName('li');
const listItemsAsArray = Array.from(listItems);
listItemsAsArray.forEach(function (li) {
  // change the class to "list-item".
});

const myImage = document.createElement('img');
myImage.className = 'img';
myImage.src = 'https://i.postimg.cc/1tJsLT9J/IMG-6076.jpg';
myImage.style.width = '300px';
document.body.appendChild(myImage);
