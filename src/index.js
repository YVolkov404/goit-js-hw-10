import SlimSelect from 'slim-select';
import { options } from './options';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
    .finally();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

function catCardMarkup(cats) {
  const {
    breeds: { name, description, temperament },
    url,
  } = cats;
  return (cardContainer.innerHTML = `
    <img src="${url}" alt="${name}" width="500">
    <h1>${name}</h1>
    <p>${description}</p>
    <p>${temperament}</p>`);
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
