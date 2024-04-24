import axiosInstance from '@/plugin/axiosClient'

export const fetchSeller = (sellerId) => {
  return axiosInstance.get(`/sellers/${sellerId}`).then((response) => response.data)
}

export const fetchSellerProduct = (sellerId) => {
  return axiosInstance
    .get(`/products?sellerId=${sellerId}&_embed=seller&_embed=category`)
    .then((response) => response.data)
}
