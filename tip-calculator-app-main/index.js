const numPeopleInput = document.querySelector("#num");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");

const tipOptions = document.querySelectorAll(".options button");
const reset = document.querySelector(".show button");

var billCost = 0;
var tipPerc = 0;
var peopleCount = 0;

if (billCost === 0 && tipPerc === 0 && peopleCount === 0) {
  reset.classList.remove("active");
} else {
  reset.classList.add("active");
}

function removeActive() {
  tipOptions.forEach((tip) => {
    tip.classList.remove("active");
  });
}

tipOptions.forEach((button) => {
  button.addEventListener("click", function () {
    removeActive();
    button.classList.add("active");
    tipPerc = button.textContent.substring(0, button.textContent.length - 1);
    tipInput.value = "";
    calculate();
    reset.classList.add("active");
  });
});

function calculate() {
  if (peopleCount !== 0) {
    let tipAmountPerPerson =
      (Number(billCost) * (Number(tipPerc) / 100)) / Number(peopleCount);
    let totalAmountPerPerson = billCost / peopleCount + tipAmountPerPerson;
    console.log(tipAmountPerPerson);
    document.querySelector(".tipAmount .money").textContent =
      "$" + tipAmountPerPerson.toFixed(2);
    document.querySelector(".total .money").textContent =
      "$" + totalAmountPerPerson.toFixed(2);
  }
}

function setPlaceHolder(input, event, text) {
  input.addEventListener(event, () => {
    input.setAttribute("placeholder", text);
  });
}
setPlaceHolder(numPeopleInput, "click", "");
setPlaceHolder(numPeopleInput, "blur", "0");
setPlaceHolder(billInput, "click", "");
setPlaceHolder(billInput, "blur", "0");
setPlaceHolder(tipInput, "blur", "Custom");

tipInput.addEventListener("click", () => {
  removeActive();
  tipInput.setAttribute("placeholder", "");
});
tipInput.addEventListener("change", () => {
  tipPerc = tipInput.value;
  calculate();
  reset.classList.add("active");
});

billInput.addEventListener("change", () => {
  billCost = billInput.value;
  calculate();
  reset.classList.add("active");
});

numPeopleInput.addEventListener("change", () => {
  peopleCount = numPeopleInput.value;
  calculate();
  reset.classList.add("active");
});

reset.addEventListener("click", () => {
  removeActive();
  tipInput.value = "";
  billInput.value = "";
  numPeopleInput.value = "";
  billCost = 0;
  tipPerc = 0;
  peopleCount = 0;
  document.querySelector(".tipAmount .money").textContent = "$0.00";
  document.querySelector(".total .money").textContent = "$0.00";
});
