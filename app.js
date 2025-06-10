// let arr = [231, 34, 32];

// // let n1 = arr[0];
// // let n2 = arr[1];
// // let n3 = arr[2];

// let [n1, n2, n3] = arr;

// // console.log(n1, n2, n3);

// let { fname, lname, age } = obj;

// // console.log(fname, lname, age);

let arr = [1, 2, 3, 4, 5];
let arr2 = [-1, ...arr, -2, -3];

// arr2 = arr2.concat(arr);

// console.log(arr2);
let obj = {
  fname: "Saala",
  lname: "kumar",
  age: 80,
};

let obj1 = {
  ...obj,
  role: "dev",
  salary: "2M",
};

const { age, lname, ...rest } = obj1;
console.log(age);
console.log(lname);
console.log(rest);
