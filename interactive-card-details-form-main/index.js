const cvcText = document.querySelector(".bottom p");
const cardNumberText = document.querySelector("#cardNum");
const cardHolderName = document.querySelector(".person p");
const expDate = document.querySelector(".person p + p");

const confirmButton = document.querySelector("#confirm");
const continueButton = document.querySelector("#continue");

function checks() {
  console.log("Hello");

  let checkName;
  let checkNumber;
  let checkDate;
  let checkCvc;

  checkName = checkHolderName();
  checkNumber = checkCardNumber();
  checkDate = checkDates();
  checkCvc = checkCvcs();

  if (checkName && checkNumber && checkDate && checkCvc) {
    document.querySelector(".form").classList.add("hidden");
    document.querySelector(".complete").classList.remove("hidden");
    document.querySelector(".complete").setAttribute("opacity", "1");
    showInfos();
  }
}

function checkCvcs() {
  const cvc = document.querySelector("#cvc").value;
  let check;

  if (cvc.length === 0) {
    check = false;
    document.querySelector("#cvc + p").classList.remove("hidden");
    document.querySelector("#cvc").style.border = "1px solid red";
  }
  if (cvc.length !== 3) {
    checkCvc = false;
    document.querySelector("#cvc + p").classList.remove("hidden");
    document.querySelector("#cvc + p").textContent = "Invalid Entry!";
    document.querySelector("#cvc").style.border = "1px solid red";
  } else {
    check = true;
    document.querySelector("#cvc").style.borderColor = "#ccc";
    document.querySelector("#cvc + p").classList.add("hidden");
  }

  return check;
}

function checkDates() {
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value;
  const y = new Date().getFullYear();

  let check;
  if (month.length === 0 || year.length === 0) {
    check = false;
    document.querySelector("#month + p").classList.remove("hidden");
    document.querySelector("#month + p").textContent = "Can't be blank";
    document.querySelector("#month").style.border = "1px solid red";
    document.querySelector("#year").style.border = "1px solid red";
  } else {
    check = true;
    document.querySelector("#month").style.borderColor = "#ccc";
    document.querySelector("#year").style.borderColor = "#ccc";
    document.querySelector("#month + p").classList.add("hidden");
  }
  if (!(month >= 1 && month <= 12) || !(year >= y && year <= 2080)) {
    check = false;
    document.querySelector("#month + p").classList.remove("hidden");
    document.querySelector("#month + p").textContent = "Invalid entry";
    document.querySelector("#month").style.border = "1px solid red";
    document.querySelector("#year").style.border = "1px solid red";
  } else {
    check = true;
    document.querySelector("#month").style.borderColor = "#ccc";
    document.querySelector("#year").style.borderColor = "#ccc";
    document.querySelector("#month + p").classList.add("hidden");
  }

  return check;
}

function checkCardNumber() {
  const cardNumber = document.querySelector("#cardNumber").value;
  let check;

  if (cardNumber.length === 0) {
    check = false;
    document.querySelector("#cardNumber + p").classList.remove("hidden");
    document.querySelector("#cardNumber").style.border = "1px solid red";
  }
  if (cardNumber.length !== 19) {
    check = false;
    document.querySelector("#cardNumber + p").classList.remove("hidden");
    document.querySelector("#cardNumber + p").textContent = "Invalid Entry!";
    document.querySelector("#cardNumber").style.border = "1px solid red";
  } else {
    check = true;
    document.querySelector("#cardNumber").style.borderColor = "#ccc";
    document.querySelector("#cardNumber + p").classList.add("hidden");
  }

  return check;
}

function checkHolderName() {
  const holderName = document.querySelector("#holderName").value;
  let check;

  if (holderName.length === 0) {
    check = false;
    document.querySelector("#holderName + p").classList.remove("hidden");
    document.querySelector("#holderName").style.border = "1px solid red";
  } else {
    check = true;
    document.querySelector("#holderName").style.borderColor = "#ccc";
    document.querySelector("#holderName + p").classList.add("hidden");
  }

  return check;
}

function showInfos() {
  const cvc = document.querySelector("#cvc").value;
  const cardNumber = document.querySelector("#cardNumber").value;
  const holderName = document.querySelector("#holderName").value;
  const month = document.querySelector("#month").value;
  const year = document.querySelector("#year").value.substr(2);

  cardHolderName.textContent = holderName;
  expDate.textContent = month + "/" + year;
  cvcText.textContent = cvc;
  cardNumberText.textContent = cardNumber;
}

document.querySelector("#cardNumber").addEventListener("input", function (e) {
  if (e.target.value.length > 19) {
    e.target.value = e.target.value.substr(0, 19);
  }

  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

document.querySelector("#month").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
});

document.querySelector("#year").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").trim();
});

confirmButton.addEventListener("click", checks);
