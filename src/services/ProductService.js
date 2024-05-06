import axiosInstance from '@/plugin/axiosClient'

export const fetchProducts = () => {
  return axiosInstance
    .get('/products', {
      params: {
        _embed: 'seller'
      }
    })
    .then((response) => response.data)
}

export const fetchProductsDetail = (productId) => {
  return axiosInstance
    .get(`/products/${productId}/`, {
      params: {
        _embed: ['seller', 'category', 'comments']
      },
      paramsSerializer: {
        indexes: null
      }
    })
    .then((response) => response.data)
}
