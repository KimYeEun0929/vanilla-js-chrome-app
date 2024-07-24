const quotes = [
  {
    quote: '명랑하게 살자! 명랑한 사람이 결국 이긴다!',
    author: '-최화정',
  },
  {
    quote: '커피에 빵을 곁들이지 않으면 그건 현대인이 아니다.',
    author: '-최화정',
  },
  {
    quote: '안되면 말고',
    author: '-박명수',
  },
  {
    quote: '돈 드는 거 하지 마라',
    author: '-박명수',
  },
  {
    quote: '되면 한다.',
    author: '-박명수',
  },
  {
    quote: '허리 펴고 입꼬리 올리면 못 할 일이 없다고. 세상에',
    author: '-최화정',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
