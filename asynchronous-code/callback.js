// Callbacks
// A callback is a function passed to another function, for it to call.

// Functional programming patterns
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

// Event-Driven Programming
function sayHi() {
  console.log('Hello');
}

setTimeout(sayHi, 3000);

// Callback hell & Pyramid of Doom
// node read file example

const fs = require('fs');

fs.readFile('./file1.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    fs.readFile('file2.txt', 'utf-8', function (err, data) {
      if (err) {
        console.log(err);
      } else {
        fs.readFile('file3.txt', 'utf-8', function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
