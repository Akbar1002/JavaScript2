/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here
  const hobbies = arr.map((hobby) => {
    const listItem = document.createElement('li');
    listItem.textContent = hobby;
    const hobbyList = document.createElement('ul');
    hobbyList.appendChild(listItem);

    return document.body.appendChild(hobbyList);
  });
  return hobbies;
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);
