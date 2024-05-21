import axiosInstance from '@/plugin/axiosClient'

export const fetchSeller = (sellerId) => {
  return axiosInstance.get(`/sellers/${sellerId}`).then((response) => response.data)
}

export const fetchSellerProduct = (sellerId, page) => {
  return axiosInstance
    .get('/products', {
      params: {
        sellerId: sellerId,
        _page: page,
        _per_page: 15,
        _embed: ['seller', 'category']
      },
      paramsSerializer: {
        indexes: null // by default: false
      }
    })
    .then((response) => response.data)
}
