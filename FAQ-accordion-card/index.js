var text = document.querySelectorAll("p");
localStorage.setItem("key", null);

text.forEach((p) => {
  p.addEventListener("click", () => {
    p.classList.toggle("bold");
    p.lastElementChild.classList.toggle("reverse");
    var clss = p.getAttribute("class").split(" ")[0];

    text.forEach((t) => {
      var item = document.querySelector(
        "span." + t.getAttribute("class").split(" ")[0]
      );

      if (localStorage.getItem("key") === item.textContent) {
        item.classList.toggle("hidden");
        t.classList.toggle("bold");
        console.log(p);
      }
    });

    document.querySelector("span." + clss).classList.toggle("hidden");
    localStorage.setItem(
      "key",
      document.querySelector("span." + clss).textContent
    );
  });
});
