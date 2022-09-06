const hero = document.querySelector("#hero");

if (screen.width < 1000) {
  hero.setAttribute("src", "images/hero-mobile.jpg");
}

function check() {
  let text = document.querySelector("#email");
  var control = false;
  console.log(text);

  if (text.value.length === 0 || !validateEmail(text.value)) {
    console.log(text.value);
    document.querySelector(".error").classList.remove("hidden");
  } else {
    console.log("true");
    document.querySelector(".error").classList.add("hidden");
    control = true;
  }

  if (control) text.value = "";
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

document.querySelector(".entry button").addEventListener("click", check);
