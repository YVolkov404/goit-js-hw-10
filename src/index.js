import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import { slimSelectoptions, notifyOptions } from './options';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import PreLoadState from './preLoadState';

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const select = document.querySelector('.breed-select');
const cardContainer = document.querySelector('.cat-info');

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const preLoadState = new PreLoadState({
  selector: '.loader',
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

select.addEventListener('change', onSelectCat);

fetchBreeds()
  .then(cats => {
    addCatsToSelect(cats);
    new SlimSelect(slimSelectoptions);
    preLoadState.hideLoaderOnAddCatsToSelect();
  })
  .catch(err => {
    Notify.warning(
      'Oops! Something went wrong! Try reloading the page!',
      notifyOptions
    );
  });

function onSelectCat(e) {
  const breedId = e.currentTarget.value;
  preLoadState.showLoaderOnSelectCat();
  fetchCatByBreed(breedId)
    .then(cats => {
      catCardMarkup(cats);
      preLoadState.hideLoaderOnSelectCat();
    })
    .catch(err => {
      Notify.warning(
        'Oops! Something went wrong! Try reloading the page!',
        notifyOptions
      );
    });
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

function catCardMarkup(cats) {
  const breeds = cats[0].breeds[0];
  return (cardContainer.innerHTML = `
    <img src="${cats[0].url}" alt="${breeds.name}" width="500">
    <h1 class="cat-info-subject">${breeds.name}</h1>
    <p class="cat-info-text">${breeds.description}</p>
    <p class="cat-info-desc">${breeds.temperament}</p>`);
}

function addCatsToSelect(cats) {
  return cats.map(cat => {
    const breed = cat.name;
    const breedId = cat.id;
    let el = document.createElement('option');
    el.value = breedId;
    el.innerHTML = `${breed}`;
    select.appendChild(el);
  });
}
