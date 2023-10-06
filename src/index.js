import { TheCatAPI } from '@thatapicompany/thecatapi';
// import SlimSelect from 'slim-select';
// import { options } from './options';
import { API_KEY } from './cat-api';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

new TheCatAPI(API_KEY);

const select = document.querySelector('.breed-select');

select.addEventListener('change', onSelectItem);

fetchBreeds();

function onSelectItem(e) {
  const breedId = e.currentTarget.value;
  fetchCatByBreed(breedId);
}
