import axiosInstance from '@/plugin/axiosClient'

export const fetchCategories = () => {
  return axiosInstance
    .get('/categories')
    .then((response) => [null, response.data])
    .catch((err) => [err])
}

export const fetchCategoryProduct = (categoryId) => {
  return axiosInstance
    .get(`/products?categoryId=${categoryId}&_embed=seller&_embed=category`, { params: {} })
    .then((response) => response.data)
}
