// function sayName(name) {
//   console.log(name);
// }

// sayName("Ramya");

const sayHello = (cbfunc, x) => {
  //sayHi, 12, 10
  //higher order function
  cbfunc(x, x - 10); //sayHi(12,10)
};

// function sayHi(a, b) {
//   console.log(a * b);
// }

sayHello((a, b) => {
  console.log(a * b);
}, 12);

// let a = 10;
// console.log(a);

// console.log(10);
