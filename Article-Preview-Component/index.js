const button = document.querySelector(".share");

button.addEventListener("click", () => {
  if (screen.width <= 750) {
    var bg = document.querySelector(".contact");
    bg.classList.toggle("bg");
    var social = document.querySelector(".social");
    var icons = document.querySelector(".icons");
    social.classList.toggle("hidden");
    icons.classList.toggle("hidden");
  } else {
    var icons = document.querySelector(".icons");
    icons.classList.toggle("hidden");
    icons.classList.toggle("bigScreen");
  }
});
