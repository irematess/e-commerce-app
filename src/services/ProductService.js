import axios from 'axios'

export const fetchProducts = () => {
  return axios
    .get('http://localhost:3000/products?_embed=seller&_embed=category')
    .then((response) => response.data)
}

export const fetchProductsDetail = (productId) => {
  return axios
    .get(`http://localhost:3000/products/${productId}/?_embed=seller&_embed=category`)
    .then((response) => response.data)
}
