// Promises

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const url = `${BASE_URL}/1`;

fetch(url)
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

// Make request to pokemon/1
// then make request to pokemon/2
// then make request to pokemon/3
// then make request to pokemon/4

fetch(`${BASE_URL}/1`)
  .then(function (res1) {
    fetch(`${BASE_URL}/2`)
      .then(function (res2) {
        fetch(`${BASE_URL}/3`)
          .then(function (res3) {
            fetch(`${BASE_URL}4`).then(function (res4) {
              console.log(res4);
            });
          })
          .catch(function (err) {
            console.log(err);
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  })
  .catch(function (err) {
    console.log(err);
  });

// Promise Chaining to flatten code
// When calling .then on a promise, can return new promise in callback
//  can chain asynchronous together with .then call
// Only need one .catch at the end - dont have a catch every promise

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log(res1);
    return fetch(`${BASE_URL}/2`);
  })
  .then((res2) => {
    console.log(res2);
    return fetch(`${BASE_URL}/3`);
  })
  .then((res3) => {
    console.log(res3);
    return fetch(`${BASE_URL}/4`);
  })
  .then((res4) => {
    console.log(res4);
  })
  .catch((err) => {
    console.log(err);
  });

// Async Patterns: Promise.all
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
// It rejects when any of the input's promises rejects, with this first rejection reason.

const loatsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
];

Promise.all(loatsOfFetchCalls).then((res) => {
  console.log(res);
});

// Async Patterns: Promise.allSettled()
// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
// with an array of objects that describe the outcome of each promise.

Promise.allSettled(loatsOfFetchCalls).then((res) => {
  console.log(res); // [{ status : 'Resolved', value: {...} }]
});

// Async Patterns: Promise.race()
//This returned promise settles with the eventual state of the first promise that settles.
// It can be resolve or reject

Promise.race(loatsOfFetchCalls).then((res) => {
  console.log(res);
});

// Async Patterns: Promise.any()
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
// It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

Promise.any(localStorage).then((res) => {
  console.log(res);
});

// Building own Promises
// Use Promise with new Keyword to make your own promises
// Promise accepts a single function as an argument
//  acution accepts two functions as arguments, resilve and reject
//  pass resolve a value for the promise to resolve to that value
//  pass reject a value for the promise to reject to that value

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is resolve value');
  }, 2000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
