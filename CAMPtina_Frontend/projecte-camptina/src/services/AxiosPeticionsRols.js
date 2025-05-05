import { useState, useEffect } from 'react'
import axiosClient from './auth'

/**
* Hook personalitzat per gestionar la càrrega de rols d’usuari des del backend.
*
* @function useAxiosPeticionsRols
* @returns {Object} Objecte amb:
*  - {Array} rols – Llista de rols obtinguda de la base de dades  
*  - {Function} carregarRols – Funció per carregar els rols des del backend
*/
export const useAxiosPeticionsRols = () => {

    /**
     * Estat per guardar la llista de rols.
     * @type {Array}
     */
    const [rols, setRols] = useState([])
    
    /**
      * Carrega els rols de la base de dades.
     * @async
     * @function carregarRols
     * @returns {Promise<void>}
     */
    const carregarRols = async () => {
        try {
            const resposta = await axiosClient.get('/rol/rols');
            setRols(resposta.data)
        } catch (error) {
            console.log("Error obtenint els rols:", error)
        }
    }

    useEffect(() => {
        carregarRols()
    }, [])

    return {rols, carregarRols}
}