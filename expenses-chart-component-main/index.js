let expenses = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    expenses = [...data];
  });

function show() {
  let num = expenses.find((expense) => {
    if (expense.day == this.classList[0]) return expense;
  }).amount;
  this.querySelector("i div").textContent = "$" + num;
  this.querySelector("i div").classList.remove("hidden");
  this.querySelector("i div").style.opacity = 1;
}

document.querySelectorAll(".day").forEach((item) => {
  item.addEventListener("mouseover", show);
});

document.querySelectorAll(".day").forEach((item) => {
  item.addEventListener("mouseout", function () {
    this.querySelector("i div").classList.add("hidden");
  });
});
