import axios from 'axios';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const BASE_URL = 'https://api.thecatapi.com/v1';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const API_KEY =
  'live_hNeVtncoYhQORQAS6M1fUjhC25z26kfdSLTiO0dCs10SE7NPGdHbLN171ZujgRlw';

axios.defaults.headers.common['x-api-key'] =
  'live_hNeVtncoYhQORQAS6M1fUjhC25z26kfdSLTiO0dCs10SE7NPGdHbLN171ZujgRlw';

const init = {
  headers: {
    'x-api-key': API_KEY,
  },
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, init).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, init).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
