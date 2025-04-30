import axios from 'axios'
import { jwtDecode } from "jwt-decode"

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

// Funció per configurar el token automàticament
const setAuthToken = (token) => {
    if(token) {
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        localStorage.setItem('jwtToken', token)
    } else {
        delete axiosClient.defaults.headers.common['Authorization']
        localStorage.removeItem('jwtToken')
    }
}

export const loginUsuari = async (email,contrasenya) => {
    try {
        const resposta = await axiosClient.post('auth/login', {
            email: email,
            contrasenya: contrasenya
        })

        
        // Obtenim dades del token
        const token = resposta.data.token
        
        // Configurem el token globalment
        setAuthToken(token)

        return {
            success: true,
            nom: resposta.data.nom,
            cognom1: resposta.data.cognom1,
            email: resposta.data.email,
            rol: resposta.data.rolNom,
            token: token
        }
    } catch (error) {
        let errorMessage = "Error de connexió amb el servidor"
        
        if(error.response) {
            errorMessage = error.response.data?.error || 
                          error.response.data?.message || 
                          "Credencials incorrectes"
        }

        // Netegem token en cas d'error
        setAuthToken(null)
        
        return {
            success: false,
            error: errorMessage
        }
    }

}

export const logoutUsuari = () => {
    setAuthToken(null)
    return {
        success: true,
        message: "Sessió tancada correctament",
      }
}

// Configuració inicial si hi ha token
const token = localStorage.getItem('jwtToken')
if(token) {
    setAuthToken(token)
}