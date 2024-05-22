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


export const fetchProductsPage = (page,sort) => {
  return axiosInstance
  .get('products', {
    params: {
      _sort:sort,
      _page: page,
      _per_page: 15
    }
  }).then((response) => response.data)
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

export const fetchTopSeller = (page) => {
  return axiosInstance.get('/products', {
    params: {
      topSeller: 1,
      _embed: 'seller',
      _page: page,
      _per_page: 15
    }
  })
  .then((response) => response.data)
}

export const fetchTopSellerProducts = () => {
  return axiosInstance
    .get('/products', {
      params: {
        topSeller: 1,
        _embed: 'seller',
        _limit: 5
      }
    })
    .then((response) => response.data)
}
