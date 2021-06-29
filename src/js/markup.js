import menuCardTpl from '../templates/menu.hbs';
import products from '../menu.json';

const menuContainer = document.querySelector('.js-menu');
console.log(menuContainer);

const menuCardsMarkup = createMenuCardsMarkup(products);

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);

function createMenuCardsMarkup(products) {
    return products.map(menuCardTpl).join('');
  };