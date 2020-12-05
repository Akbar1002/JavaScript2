// /**
//  ** Exercise 1: The book books **
//   I 'd like to display my three favorite books inside a nice webpage!
//   1. Iterate through the array of books.
//   2. For each book, create a `<p>`
//   element with the book title and author and append it to the page.
//   3. Use a `<ul>`  and `<li>` to display the books.
//   4. Add an `<img>` to each book that links to a URL of the book cover.
//   5. Change the style of the book depending on whether you have read it(green) or not(red).
//   The end result should look something like this:
//   https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
//   */
// console.log("work");
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    img: 'https://i.postimg.cc/x1CKr8nN/download.jpg',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    img: 'https://i.postimg.cc/d35LnR7H/download-1.jpg',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    img: 'https://i.postimg.cc/4yLycKVs/download-2.jpg',
    alreadyRead: true,
  },
];
const ul = document.getElementById('list');
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  console.log(book);

  const li = document.createElement('li');
  const p = document.createElement('p');
  p.innerHTML = `${book.title} - ${book.author}`;
  const image = document.createElement('img');
  image.src = book.img;
  image.style.width = '200px';
  image.style.height = '200px';
  li.appendChild(p);
  li.appendChild(image);
  ul.appendChild(li);

  ul.style.display = 'flex';
  li.style.margin = '10px';
  li.style.listStyle = 'none';

  if (books.alreadyRead == true) {
    li.style.backgroundColor = 'green';
  } else {
    li.style.backgroundColor = 'red';
  }
}

//my background color doesnot change //
