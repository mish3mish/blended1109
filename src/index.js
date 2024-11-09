import './styles/normalize.css';
import './styles/index.css';
import { getProducts } from './requests/products';
import { createMarkupProducts } from './services/markupService';

const list = document.querySelector('#allProducts');

getProducts().then(response => {
  console.log(response);
  list.insertAdjacentHTML('beforeend', createMarkupProducts(response.products));
  console.log(createMarkupProducts(response.products));
});
