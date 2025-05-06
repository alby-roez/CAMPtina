import axios from 'axios'
import { ESDEVENIMENTS, PUBLIC_ROUTES } from '../consts.js'

/**
 * @description Instància configurada d'Axios per fer peticions a l'API del backend.
 * @type {axios.AxiosInstance}
 * @property {string} baseURL - URL base per totes les peticions
 */
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api" 
})

/**
 * @description Interceptor de petició Axios per a:
 * - Injectar automàticament el token JWT als headers de les peticions
 * @function
 * @param {axios.AxiosRequestConfig} config - Configuració de la petició
 * @returns {axios.AxiosRequestConfig} Configuració modificada amb el token si existeix
 * @throws {Error} Propaga errors durant la configuració de la petició
 */
axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})


/**
 * @description Interceptor de resposta Axios per a:
 * - Gestionar errors 401 (No autoritzat)
 * - Redirigir a /unauthorized si la petició falla per autenticació
 * @function
 * @param {axios.AxiosResponse} response - Resposta de l'API
 * @returns {axios.AxiosResponse} Resposta directa si tot és correcte
 * @throws {Error} Propaga l'error original amb gestió especial per codi 401
 */
axiosClient.interceptors.response.use(
  response => response,
  error => {
      const token = localStorage.getItem('jwtToken')
      const status = error.response?.status;
      const path = window.location.pathname;

      if (status === 401 && !PUBLIC_ROUTES.includes(path) && !token) {
        window.history.pushState({}, '', '/unauthorized')
        window.dispatchEvent(new Event(ESDEVENIMENTS.CAPENDAVANT))
      }
      return Promise.reject(error)
    }
)

export default axiosClient