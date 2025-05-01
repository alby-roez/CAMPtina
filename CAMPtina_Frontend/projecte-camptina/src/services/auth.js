import axios from 'axios'
import { ESDEVENIMENTS } from '../consts.js'

// 1. Creem una sola instància d’Axios
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api" // o la teva VITE_API_URL
})

// 2. Afegim un interceptor de request per injectar el token
axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken')
  if (token) {
    // Si hi ha token, l’afegim a l’header Authorization
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// Response interceptor per 401:
axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // redirigim a /unauthorized
      window.history.pushState({}, '', '/unauthorized')
      window.dispatchEvent(new Event(ESDEVENIMENTS.CAPENDAVANT))
    }
    return Promise.reject(error)
  }
)

export default axiosClient