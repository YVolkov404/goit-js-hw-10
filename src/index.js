import SlimSelect from 'slim-select';
import { options } from './options';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const cardContainer = document.querySelector('.cat-info');

select.addEventListener('change', onSelectCat);

fetchBreeds()
  .then(cats => {
    addCatsToSelect(cats);
    new SlimSelect(options);
  })
  .catch(err => {
    console.log(err);
  });

function onSelectCat(e) {
  e.preventDefault();
  const breedId = e.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(catCardMarkup)
    .catch(err => {
      console.log(err);
    })
    .finally(() => form.reset());
}

// ++++++++++++++++++++++++++++++++++++++++++++++

// cat[name] :: check

function catCardMarkup(cat) {
  cardContainer.innerHTML = `
      <h1>${cat.name}</h1>
      <p>${cat.description}</p>
      <p>${cat.temperament}</p>`;
}

function addCatsToSelect(cats) {
  cats.map(cat => {
    const breed = cat.name;
    const breedId = cat.id;
    let el = document.createElement('option');
    el.value = breedId;
    el.innerHTML = `${breed}`;
    select.appendChild(el);
  });
}
