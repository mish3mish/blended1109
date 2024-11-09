import './styles/normalize.css';
import './styles/index.css';
import { getProducts, getProductByID } from './requests/products';
import { createMarkupProducts, createMarkupSingleProduct } from './services/markupService';


const list = document.querySelector('#allProducts');
const boxSingleProduct = document.querySelector('#singleProduct')
getProducts().then(response => {
  // console.log(response);
  list.insertAdjacentHTML('beforeend', createMarkupProducts(response.products));
  // console.log(createMarkupProducts(response.products));
});

// console.log(getProductByID.then(1));


const form = document.querySelector('#singleProductForm');

form.addEventListener('submit', heandleForm )

function heandleForm(event) {
  event.preventDefault()
  const id = event.currentTarget.elements.id.value.trim();
  // console.log(iD);
  getProductByID(id).then(response => {
    console.log(response);
    const markup = createMarkupSingleProduct(response);
    console.log();
    boxSingleProduct.innerHTML = ''
    boxSingleProduct.insertAdjacentHTML('beforeend', markup);

  });
}
