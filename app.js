let btn = document.querySelector("button");

// for (let btn of btns) {
//   btn.addEventListener("click", (e) => {
//     console.log(e.target);
//   });
// }

// btn.nextElementSibling.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// function hello() {
//   console.log("Hello");
// }

// btn.addEventListener("click", () => {
//   console.log("Hello");
// });

// document.querySelector("ul").addEventListener("mouseover", () => {
//   console.log("Hovering!");
// });

function hello(event) {
  console.log(event.target);
}

// btn.addEventListener("click", hello);
