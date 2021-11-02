import { products } from './data/products.js';
import { item } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const productsSliderList = document.querySelector('.js_products__slider-list');

products.forEach(product => {


    productsList.insertAdjacentHTML('beforeend',item(product));
    productsSliderList.insertAdjacentHTML('beforeend',
    `
    <div class="item swiper-slide">
      <img src="${product.image}" alt="" class="swiper__img">
      <div class="swiper__block">
      <p class="swiper__name js_product-name">${product.name} </p>
      <p class="swiper__desc">${product.description[0].text}...</p>
      </div>
  </div>
    `
    );
})
