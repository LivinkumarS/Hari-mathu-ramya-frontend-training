// let obj = {
//   name: "Livinkumar",
//   age: 88,
//   canVote: true,
// };

// let arr = ["Livinkumar", 88, true];

// console.log(obj.canVote);
// console.log(obj["canVote"]);

// console.log(arr[2]);

// this keyword

let obj = {
  fname: "harikrishnan",
  lname: "Ramasamy",
  canVote: true,
  marks: 90,
  favSubjects: [
    "html",
    "css",
    "js",
    { mostFav: "react", leastfav: ["angular", "node"] },
  ],
  print() {
    console.log(this.fname);
  },
};

// obj["print"]();

// let keys = Object.keys(obj);
// console.log(keys);

// let val = Object.values(obj);
// console.log(val);

console.log(obj.favSubjects[3].leastfav[1]);
