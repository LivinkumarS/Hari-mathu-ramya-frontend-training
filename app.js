let addBtn = document.getElementById("add");
let inpTag = document.querySelector("input");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  let word = inpTag.value;
  if (word === "") {
    return;
  }
  let newTag = document.createElement("li");
  newTag.innerHTML = `${word} <button>del</button>`;
  ul.appendChild(newTag);
  inpTag.value = "";
});

// let h1 = document.querySelector("h1");

// console.log(h1.textContent);
// h1.textContent = "";

// Inline Event Listener
