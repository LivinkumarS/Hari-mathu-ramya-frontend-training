// const h1 = document.getElementById("head");
// console.log(h1.textContent);
// h1.textContent = "Title";
// h1.innerHTML = "<span>Title</span>";

// console.log(h1.getAttribute("id"));
// console.log(a.getAttribute("href"));
// console.log(a.textContent);

// a.setAttribute("target", "_blank");
// a.setAttribute("href", "https://www.yahoo.com");
// a.textContent = "Yahoo!";
// a.removeAttribute("target");
// h1.removeAttribute("id");

// h1.style.backgroundColor = "red";
// h1.style.color = "blue";
// h1.style.display = "inline";

// console.log(h1.classList);
// h1.classList.add("title");
// h1.classList.add("title1");
// h1.classList.add("title2");

// h1.classList.remove("head1");

// h1.classList.toggle("head");
// h1.classList.toggle("head4");


// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// console.log(ul.firstElementChild.parentElement);

// console.log(ul.firstElementChild.nextElementSibling);
// console.log(ul.lastElementChild.previousElementSibling);

const a = document.querySelector("a");
console.log(a.parentElement.firstElementChild.lastElementChild);