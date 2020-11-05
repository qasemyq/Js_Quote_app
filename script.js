
const quotes = [
  {
    name: "Anne Frank",
    quote: "Think of all the beauty still left around you and be happy",
  },
  
  {
    name: "Albert Einstein",
    quote: "Onve you stop learning, you start dying",
  },
  
  {
    name: "Steve jobs",
    quote: "the only way to do great work, is to love what you do",
  },
  
  {
    name: "Paulo coelho",
    quote: "the world is chanaged by your example, not by your opinion ",
  },
  
  {
    name: "johnny sins",
    quote:
      "i failed in some subjects in exam, but my friend passed in all. now he is a cameraman in pornhub and i am a pornstar",
  },
];


const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayquote);

function displayquote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
