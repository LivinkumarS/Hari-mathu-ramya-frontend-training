// Function Declaration

// sayHi();

function sayHi() {
  console.log("Hi");
  console.log(123);
}

// sayHi();

// Function Expression

// printName();

const printName = () => {
  console.log("Saala");
};

// printName();

function add(a, b) {
  console.log(a + b);
}

// add(9, 9);
// add(99, 99);

// add(66, 34);
// add(166, 34);

// for (let i = 0; i < 10; i++) {
//   add(i, i + 1); //add(1,2)
// }

// 10
// iter1--> 0,

//1

// Return Keyword

const start = (num) => {
  console.log("Started!");
  console.log("Step1");
  console.log("Step2");

  if (num > 10) {
    return;
  }

  console.log("Step3");
  console.log("Step4");
  console.log("Step5");
  console.log("Ended!");
};

// start(10);
// start(11);

function sub(a, b) {
  //30,45
  let ans = a - b; //-15
  return ans;
}

// let val = sub(30, 45) + 100;
// console.log(val);
// -15+100

function intro(name, place, age) {
  return `Hello I am ${name}. I am from ${place}. I am ${age} years old`;

  console.log("Hello world");
}

console.log(intro("Saala", "Karur", 82));

// let a = 82;
console.log(82);
