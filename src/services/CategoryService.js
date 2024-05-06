import axiosInstance from '@/plugin/axiosClient'

export const fetchCategories = () => {
  return axiosInstance
    .get('/categories')
    .then((response) => [null, response.data])
    .catch((err) => [err])
}

export const fetchCategoryProduct = (categoryId) => {
  return axiosInstance
    .get('/products', {
      params: {
        categoryId: categoryId,
        _embed: ['seller', 'category']
      },
      paramsSerializer: {
        indexes: null // by default: false
      }
    })
    .then((response) => response.data)
}

export const fetchCategoryDetail = (categoryId) => {
  return axiosInstance.get(`/categories/${categoryId}`).then((response) => response.data)
}
