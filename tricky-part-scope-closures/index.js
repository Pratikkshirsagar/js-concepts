// deference between var, let & const
// 1. let & const new version of var keyword introduced in ES6
// 2. var is attached to window object but let and const are not
// 3. var is function scope let and const are block scope
// 4. var can be re-declare where let and const can we re declared
// 5. var can be access before initialization let and const cant be access before initialization

// Closure
// Function with its outer (lexical scope) forms a closure

function x() {
  const y = 10;
  return function () {
    console.log(y);
  };
}

const z = x();
z(); // 10

// Anothere Example
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      return ++count;
    },

    descriment: function () {
      return --count;
    },
  };
}

const counter = createCounter();
console.log(counter.count); // value can be access
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

// Loops
for (let i = 1; i < 6; i++) {
  function test(j) {
    setTimeout(() => {
      console.log(j);
    }, 1000 * j);
  }
  test(i);
}
