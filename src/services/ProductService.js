import axios from 'axios'

export const fetchCategories = () => {
  return axios.get('http://localhost:3000/categories').then((response) => response.data)
}

export const fetchProducts = () => {
  return axios.get('http://localhost:3000/products').then((response) => response.data)
}

export const fetchProductsDetail = (productId) => {
  return axios.get(`http://localhost:3000/products/${productId}`).then((response) => response.data)
}
