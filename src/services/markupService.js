export function createMarkupProducts(arr) {
  return arr
    .map(({ thumbnail, title, price, rating }) => {
      return `
    <li class="product-item">
            <img src="${thumbnail}" alt="${title} width="200" height="200>
            <h3 class="product-title">${title}</h3>
            <p class="product-price">${price}</p>
            <p class="product-rating">${rating}</p>
          </li>
    `;
    })
    .join('');
}
