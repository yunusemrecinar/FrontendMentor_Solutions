const button = document.querySelector(".claim");
button.addEventListener("click", () => {
  var inputs = document.querySelectorAll(".middle form input");
  var firstName = inputs[0].value;
  console.log(firstName);
  var lastName = inputs[1].value;
  var email = inputs[2].value;
  var password = inputs[3].value;

  var check1 = false;
  var check2 = false;
  var check3 = false;
  var check4 = false;

  if (firstName.length == 0) {
    document.querySelector(".first.error").classList.remove("hidden");
    document.querySelector("input.first").classList.add("brdr");
  } else {
    document.querySelector(".first.error").classList.add("hidden");
    document.querySelector("input.first").classList.remove("brdr");
    check1 = true;
  }
  if (lastName.length == 0) {
    document.querySelector(".second.error").classList.remove("hidden");
    document.querySelector("input.second").classList.add("brdr");
  } else {
    document.querySelector(".second.error").classList.add("hidden");
    document.querySelector("input.second").classList.remove("brdr");
    check2 = true;
  }
  if (email.length == 0 || !validateEmail(email)) {
    document.querySelector(".third.error").classList.remove("hidden");
    document.querySelector("input.third").classList.add("brdr");
  } else {
    document.querySelector(".third.error").classList.add("hidden");
    document.querySelector("input.third").classList.remove("brdr");
    check3 = true;
  }
  if (password.length == 0) {
    document.querySelector(".fourth.error").classList.remove("hidden");
    document.querySelector("input.fourth").classList.add("brdr");
  } else {
    document.querySelector(".fourth.error").classList.add("hidden");
    document.querySelector("input.fourth").classList.remove("brdr");
    check4 = true;
  }

  if (check1 && check2 && check3 && check4) {
    for (let i = 0; i < 4; i++) {
      document.querySelectorAll(".middle form input")[i].value = "";
    }
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
