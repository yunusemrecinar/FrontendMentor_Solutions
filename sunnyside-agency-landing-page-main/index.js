if (window.innerWidth <= 1000) {
  document.querySelector(".hamburger").classList.remove("hidden");
  document.querySelector(".sidebar").classList.add("hidden");
  document
    .querySelector("#headerImg")
    .setAttribute("src", "images/mobile/image-header.jpg");

  document
    .querySelector(".dos img")
    .setAttribute("src", "images/mobile/image-transform.jpg");

  document
    .querySelector(".tres img")
    .setAttribute("src", "images/mobile/image-stand-out.jpg");
  document
    .querySelector(".cinco img")
    .setAttribute("src", "images/mobile/image-graphic-design.jpg");
  document
    .querySelector(".seis img")
    .setAttribute("src", "images/mobile/image-photography.jpg");

  document
    .querySelector("#tl")
    .setAttribute("src", "images/mobile/image-gallery-milkbottles.jpg");
  document
    .querySelector("#tr")
    .setAttribute("src", "images/mobile/image-gallery-orange.jpg");
  document
    .querySelector("#bl")
    .setAttribute("src", "images/mobile/image-gallery-cone.jpg");
  document
    .querySelector("#br")
    .setAttribute("src", "images/mobile/image-gallery-sugar-cubes.jpg");
}

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("hidden");
});

// function imageChanges() {
//   const size = window.innerWidth > 1000 ? "Desktop" : "Mobile";
//   console.log(size);
//   if (screen !== size) {
//     if (size === "Desktop") {
//       screen = "Desktop";
//       document
//         .querySelector("#headerImg")
//         .setAttribute("src", "images/desktop/image-header.jpg");
//       document.querySelector(".hamburger").classList.add("hidden");
//     } else {
//       screen = "Mobile";

//       document
//         .querySelector("#headerImg")
//         .setAttribute("src", "images/mobile/image-header.jpg");
//       document.querySelector(".hamburger").classList.remove("hidden");
//     }
//   }
// }
