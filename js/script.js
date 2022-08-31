/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: "The future's uncertain and the end is always near.",
    source: "Jim Morrison",
    citation: "Roadhouse Blues, Morrison Hotel",
    year: 1970,
    tags: "music",
  },
  {
    quote: "Fair shake of the sauce bottle, mate.",
    source: "Kevin Rudd",
    citation: "Sky News interview",
    year: 2012,
    tags: "politics",
  },
  {
    quote:
      "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.",
    source: "John Carmack",
    citation: "Twitter",
    year: 2011,
    tags: "programming",
  },
  {
    quote: "Take care of your memories, for you cannot relive them.",
    source: "Bob Dylan",
    citation: "unknown",
    year: "unknown",
    tags: "music",
  },
  {
    quote:
      "Sometimes it is the people who no one can imagine anything of who do the thingsa no one can imagine.",
    source: "Alan Turing",
    citation: "unknown",
    year: "unknown",
    tags: "programming",
  },
  {
    quote: "It does not matter how slowly you go, as long as you do not stop.",
    source: "Confucius",
    citation: "unknown",
    year: "unknown",
    tags: "philosophy",
  },
  {
    quote: "Do. Or do not. There is no try.",
    source: "Jedi Master Yoda",
    citation: "Star Wars: The Empire Strikes Back",
    year: "1980",
    tags: "movie",
  },
];


/***
 * `getRandomQuote` function
 ***/

let number;

const getRandomQuote = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return quotes[index];
};
/***
 * `printQuote` function
 ***/


const printQuote = () => {
  const quote = getRandomQuote(quotes);
  const randHexColor = ("#" + ((1<<24)*Math.random() | 0).toString(16));
  let quoteHTML = `
      <p class="quote">${quote.quote}</p>
      <p class="source">${quote.source}`;
  if (quote.citation !== "unknown") {
    quoteHTML += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year !== "unknown") {
    quoteHTML += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tags) {
    quoteHTML += `<span class="year">${quote.tags}</span`;
  }
  quoteHTML += `</p>`;
  document.getElementById("quote-box").innerHTML = quoteHTML;
  document.body.style.backgroundColor = randHexColor;

  // reset timer to new 
  clearInterval(newQuote);
  newQuote = setInterval(printQuote, 20000);
};

/*** SetInterval Timer function for auto renewal of quote every 20sec***/
let newQuote = setInterval(printQuote, 20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
