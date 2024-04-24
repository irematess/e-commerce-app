import axiosInstance from '@/plugin/axiosClient'

export const fetchCategories = () => {
  return axiosInstance.get('/categories').then((response) => response.data)
}

export const fetchCategoryProduct = (categoryId) => {
  return axiosInstance
    .get(`/products?categoryId=${categoryId}&_embed=seller&_embed=category`)
    .then((response) => response.data)
}
