const size = screen.width;

if (size < 1000) {
  const button = document.querySelector(".inpt button");

  button.addEventListener("click", () => {
    var mail = document.querySelector(".inpt input").value;
    const text = document.querySelector(".textMobile");
    if (!validateEmail(mail)) {
      text.classList.toggle("hidden");
      localStorage.setItem("check", "false");
    } else {
      if (localStorage.getItem("check") == "false") {
        text.classList.toggle("hidden");
        localStorage.setItem("check", "true");
      } else {
        document.querySelector(".inpt input").value;
      }
    }
  });
} else {
  const button = document.querySelector(".inpt button");

  button.addEventListener("click", () => {
    var mail = document.querySelector(".inpt input").value;
    const text = document.querySelector(".textDesktop");
    if (!validateEmail(mail)) {
      text.classList.toggle("hidden");
      localStorage.setItem("check", "false");
    } else {
      if (localStorage.getItem("check") == "false") {
        text.classList.toggle("hidden");
        localStorage.setItem("check", "true");
      } else {
        document.querySelector(".inpt input").value = "";
      }
    }
  });
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
