// Map

// [1,2,3,4,5,6,7,8,9,10]--->[3,4,5,6,7,8,9,10,11,12]Transformation-->+2

// let arr = ["Apple", "Orange", "Pineapple", "Banana", "Kiwi"];

// let newArr = arr.map((item, ind) => {
//   return `${item} is a fruit`;
// });

// console.log(newArr);

//["Apple is a fruit", "Orange is a fruit"....]

// ("Apple", 0), ("Orange", 1),.......("Kiwi", 4).

// Filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];

// let newArr = arr.filter((item, ind) => {// 2,1
//   return ind-1;
// }); //-1,0,1,2,3,4,5,6

// console.log(newArr);

//(1,0),(2,1)....(0,9),(10,10)

// []

// Reduce

// [1,2,3,4,5,6,7,8,9,10]--> 55
//["hello ","Guys, ","This is ","LK here"]--->

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //-55

// let newArr = arr.reduce((acc, item, ind) => {
//   return acc * item;
// }, 1);



// console.log(newArr);

//-1,

// "hello "

// (0,1,0),(1,2,1),(3,3,2),(6,4,3),(10,5,4),(15,6,5),(21,7,6),(28,8,7),(36,9,8),(45,10,9)--->55

// iter 1-->
