import axios from 'axios'

export const fetchCategories = () => {
  return axios.get('http://localhost:3000/categories').then((response) => response.data)
}

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

export const fetchSeller = (sellerId) => {
  return axios.get(`http://localhost:3000/sellers/${sellerId}`).then((response) => response.data)
}

export const fetchCategoryProduct = (categoryId) => {
  return axios
    .get(`http://localhost:3000/products?categoryId=${categoryId}&_embed=seller&_embed=category`)
    .then((response) => response.data)
}
