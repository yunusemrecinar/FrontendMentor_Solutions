const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.toggle("hidden");
  mainContainer.classList.toggle("hidden");
});

rateAgain.addEventListener("click", () => {
  mainContainer.classList.toggle("hidden");
  thanksContainer.classList.toggle("hidden");
});

rates.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.textContent = btn.textContent;
  });
});
