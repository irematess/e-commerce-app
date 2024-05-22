import axiosInstance from '@/plugin/axiosClient'

export const fetchCategories = () => {
  return axiosInstance
    .get('/categories')
    .then((response) => [null, response.data])
    .catch((err) => [err])
}

export const fetchCategoryProduct = (categoryId, page, sort) => {
  return axiosInstance
    .get('/products', {
      params: {
        categoryId: categoryId,
        _embed: ['seller', 'category'],
        _sort:sort,
        _page: page,
        _per_page: 15
        
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
