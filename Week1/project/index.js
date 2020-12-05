// your code goes in here

const quotes = [
  {
    quote: 'Action speaks loader than words',
    author: '- Mark Twain',
  },
  {
    quote: 'You talk when you cease to be at peace with your thoughts.',
    author: '- Kahlil Gibran',
  },
  {
    quote: 'Beauty is not in the face; beauty is a light in the heart..',
    author: '- Kahlil Gibran',
  },
  {
    quote: 'We are all like the bright moon, we still have our darker side.',
    author: '- Kahlil Gibran',
  },
  {
    quote: 'Generosity is giving more than you can, and pride is taking less than you need.',
    author: '- Kahlil Gibran',
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: '- Will Rogers',
  },
];

const btn = document.getElementById('btn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
});
