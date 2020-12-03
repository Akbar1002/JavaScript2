/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
console.log('work')
function createBookList(list) {
  // your code goes in here, return the ul element
  const main = document.getElementById('bookList');
  const ul = document.getElementById('listItems');

  for(i=0; i<list.length; i++){
    
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    p.innerHTML = `${list[i].title} - ${list[i].author} - ${list[i].img}}`;
    img.src = 'https://i.postimg.cc/BbvFyK3P/download-1.jpg'

    img.src = 'https://i.postimg.cc/RhVqq13g/download-1.jpg'

    img.src = 'https://i.postimg.cc/4yLycKVs/download-2.jpg'

    const color = list[i].alreadyRead ? 'green' : 'red';
    li.style.backgroundColor = color;
    
    document.body.ul appendChild(li);
    li.appendChild(img);
    li.appendChild(p);

  }

  ul.appendChild('li');


const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];


createBookList(books);
