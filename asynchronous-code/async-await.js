// Async Await keyword
// async / await are language keywords for working with promises
// Async
// async - you can declare any function in javascript as async
// async function always return promises
// Await
// Inside an async function, we can use await
// await pauses execuation
// can await any promise
// await waits for promise to resolve & evaluates to its resolved value
// It then resumes execuation
// Think of the await keyword like pause button

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getFirstPokemon() {
  const result = await fetch(`${BASE_URL}/1`);
  console.log(result);
}

async function getFourPokemon() {
  const res1 = await fetch(`${BASE_URL}/1`);
  console.log(res1);

  const res2 = await fetch(`${BASE_URL}/2`);
  console.log(res2);

  const res3 = await fetch(`${BASE_URL}/3`);
  console.log(res3);

  const res4 = await fetch(`${BASE_URL}/4`);
  console.log(res4);
}

// Error handling in Async await
async function fetchFakeWebsite() {
  try {
    const res = await fetch('http://nope/nope');
    console.log(res);
  } catch (error) {
    console.log('Some thing went wrong');
  }
}
