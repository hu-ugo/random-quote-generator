/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var quotes = [
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    source: 'Edgar Allan Poe',
    citation:'A Dream Within a Dream',
    year:'1849',
    tag: 'Literature'
  },
  {
    quote: 'There is nothing permanent except change.',
    source: 'Heraclitus',
    tag: 'Philosophy'
  },
  {
    quote: 'Not all those who wander are lost.',
    source: ' J. R. R. Tolkien',
    citation:'The Lord of the Rings',
    year:'1954',
    tag: 'Literature'
  },
  {
    quote: 'No act of kindness, no matter how small, is ever wasted.',
    source: 'Aesop',
    tag: 'Philosophy'
  },
  {
    quote: 'The journey of a thousand miles begins with one step.',
    source: 'Lao Tzu',
    tag: 'Philosophy'
  }
];

const changeBGColor = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 256);
  }
  let randomRGB = `rgb(${randomNumber()},`;
  randomRGB += `${randomNumber()},`;
  randomRGB += `${randomNumber()})`;
  // console.log(randomRGB);
  document.body.style.backgroundColor = randomRGB;
}

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

const getRandomQuote = () => {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;
}

//console.log(getRandomQuote());

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let htmlString = '';

  htmlString += `<p class="quote"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source}`;

  if (randomQuote.citation) {
    htmlString += `<span class="citation"> ${randomQuote.citation} </span>`
  }
  if (randomQuote.year) {
    htmlString += `<span class="year"> ${randomQuote.year} </span>`
  }
  if (randomQuote.tag) {
    htmlString += `<span class="tag"> ${randomQuote.tag} </span>`
  }
  htmlString += `</p>`;
  //console.log(htmlString);
  document.getElementById('quote-box').innerHTML = htmlString;
  changeBGColor();
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(printQuote, 200);
