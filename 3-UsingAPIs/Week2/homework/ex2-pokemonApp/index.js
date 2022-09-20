'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const respond = await fetch(url);
  if (respond.ok) {
    return respond.json();
  }
  throw new Error(` error is ${respond.status}  : ${respond.statusText} `);
}

function fetchAndPopulatePokemons(url) {
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Get Pokemons';
  document.body.appendChild(button);
  const select = document.createElement('select');
  select.setAttribute('id', 'select');
  document.body.appendChild(select);

  button.addEventListener('click', async () => {
    button.disabled = true;

    const results = await fetchData(url);
    const resultsList = results.results;
    const arrayList = resultsList.map((ele) => ele.name);

    for (let i = 0; i < arrayList.length; i++) {
      const optionElement = document.createElement('option');

      select.appendChild(optionElement);

      optionElement.textContent = arrayList[i];
      optionElement.id = arrayList[i];
    }
  });
}

async function fetchImage(url) {
  const results = await fetchData(url);
  const resultsList = results.results;

  const imgUrlList = resultsList.map((urlEle) => urlEle.url);
  const imageElement = document.createElement('img');
  imageElement.style.width = '200px';

  document.body.appendChild(imageElement);

  // imageElement.src = imgUrlList[2];
  // console.log((imageElement.src = imgUrlList[2]));
  // for (let i = 0; i < imgUrlList.length; i++) {
  //   imageElement.src = imgUrlList[i];
  // }
}

async function main() {
  const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  try {
    await fetchData(pokemonsUrl);
    fetchAndPopulatePokemons(pokemonsUrl);
    fetchImage(pokemonsUrl);
  } catch (error) {
    fetchAndPopulatePokemons(error.message);
  }
}
window.addEventListener('load', main);
