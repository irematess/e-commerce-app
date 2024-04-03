import axios from 'axios'

export const fetchCategories = () => {
  return axios.get('http://localhost:3000/categories').then((response) => response.data)
}
