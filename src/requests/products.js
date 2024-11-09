import apiInstance from '../services/api';

const BASE_URL = 'https://dummyjson.com'

export function getProducts() {
  return fetch(`${BASE_URL}/products`).then(res => res.json());
}

export function getProductByID(id) {
  return fetch(`${BASE_URL}/products/${id}`).then(res => res.json());
}

