//const amount = 12;

// if (amount < 10) {
//   //console.log("small number");
// } else {
//   //console.log("large number");
// }

// // console.log(`hey its my first node app!!!`);

// // console.log(__dirname);
// setInterval(() => {
//   // console.log("hello world");
// }, 1000);

// Modules
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
// console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
