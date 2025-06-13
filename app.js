let newElement = document.createElement("div");
newElement.textContent = "New Element Created in JavaScript!";
newElement.style.color = "#657547";
newElement.style.fontSize = "50px";
// newElement.textContent = "";

// document.querySelector("body").appendChild(newElement);
// document.querySelector("body").prepend(newElement);

document
  .querySelector("body")
  .insertBefore(newElement, document.querySelector("h2"));
