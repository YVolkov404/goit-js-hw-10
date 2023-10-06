import axios from 'axios';
import SlimSelect from 'slim-select';
import { options } from './options';

const cardContainer = document.querySelector('.cat-info');

const BASE_URL = 'https://api.thecatapi.com/v1';
export const API_KEY =
  'live_hNeVtncoYhQORQAS6M1fUjhC25z26kfdSLTiO0dCs10SE7NPGdHbLN171ZujgRlw';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const init = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export function fetchBreeds() {
  fetch(`${BASE_URL}/breeds`, init)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.map(item => {
        const breed = item.name;
        const breedId = item.id;
        let el = document.createElement('option');
        el.value = breedId;
        el.innerHTML = `${breed}`;
        document.querySelector('.breed-select').appendChild(el);
      });

      new SlimSelect(options);

      return data;
    })
    .catch(err => {
      console.log(err);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breeds_ids=${breedId}`, init)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const markup = renderCatCard(data);
      cardContainer.innerHTML = markup;
    });
}

function renderCatCard(data) {
  return data
    .map(data => {
      return `<img src="${data.url}" alt="" width = "500">
      <h1>${data.name}</h1>
      <p>${data.description}</p>
      <p>${data.temperament}</p>`;
    })
    .join('');
}
