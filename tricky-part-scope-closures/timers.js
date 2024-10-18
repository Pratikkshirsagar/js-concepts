// setTimeout
setTimeout(() => {
  console.log('here 1');
}, 1000);

// setInterval
const t1 = setInterval(() => {
  console.log('hello');
}, 1000);

console.log(t1); // id

//Debouncing
// delaying execution of a function

// Regualar logic
const searchInput = document.querySelector('#search');

let debounceTimer;
searchInput.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log(e.target.value);
  }, 500);
});

// Advance pattern
function debaounc(cb, delay) {
  let timerId;

  return () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      cb();
    }, delay);
  };
}

function queryAPI() {
  console.log('Making a API request');
}

const debouncedQueryAPI = debounce(queryAPI, 300);

// Throttling
// Function is called once in a specific interval of time
function throttle(func, delay) {
  let timeout;
  return () => {
    func();
    timeout = setTimeout(() => {
      // do something
    }, delay);
  };
}
