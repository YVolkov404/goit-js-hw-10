export default class PreLoadState {
  constructor({ selector, hidden = true }) {
    this.refs = this.getRefs(selector);

    hidden && this.showLoaderOnAddCatsToSelect();
  }

  getRefs(selector) {
    const refs = {};

    refs.select = document.querySelector('.breed-select');
    refs.cardContainer = document.querySelector('.cat-info');
    refs.loader = document.querySelector('.loader');

    return refs;
  }

  showLoaderOnAddCatsToSelect() {
    this.refs.select.classList.add('is-hidden');
    this.refs.loader.classList.remove('is-hidden');
  }

  hideLoaderOnAddCatsToSelect() {
    this.refs.select.classList.remove('is-hidden');
    this.refs.loader.classList.add('is-hidden');
  }

  showLoaderOnSelectCat() {
    this.refs.cardContainer.classList.add('is-hidden');
    this.refs.loader.classList.remove('is-hidden');
  }

  hideLoaderOnSelectCat() {
    this.refs.cardContainer.classList.remove('is-hidden');
    this.refs.loader.classList.add('is-hidden');
  }
}
