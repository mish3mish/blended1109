import apiInstance from '../services/api';

export function getProducts() {
  return fetch('https://dummyjson.com/products').then(res => res.json());
}
