const quote = document.querySelector("blockquote");
const button = document.querySelector("button");
const id = document.querySelector("section p span");
const sect = document.querySelector("section");
const oldQuote = quote.textContent;
var newQuote;

getQuote();

function getQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = `"${data.slip.advice}"`;
      id.textContent = data.slip.id;

      quote.classList.add("slide");
      setTimeout(() => {
        quote.classList.remove("slide");
      }, 1280);
    });
}

document.querySelector("button").addEventListener("click", getQuote);
