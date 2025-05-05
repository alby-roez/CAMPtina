import { useState, useEffect } from 'react'
import axiosClient from './auth'

/**
 * Hook personalitzat per gestionar les peticions relacionades amb les categories.
 * Proporciona estat i funció per carregar categories des del backend.
 *
 * @function useAxiosPeticionsCategories
 * @returns {Object} Un objecte amb:
 *  - {Array} categories – Llista de categories obtinguda del servidor
 *  - {Function} carregarCategories – Funció per recarregar les categories
 */
export const useAxiosPeticionsCategories = () => {

    const [categories, setCategories] = useState([]);

    /**
     * Carrega la llista de categories des de l'API i actualitza l'estat.
     *
     * @async
     * @function carregarCategories
     * @returns {Promise<void>}
     */
    const carregarCategories = async () => {
        try {
            const resposta = await axiosClient.get('/categoria/categories');
            setCategories(resposta.data)
        } catch (error) {
            console.log("Error obtenint les categories:", error)
        }
    }

    useEffect(() => {
        carregarCategories()
    }, [])

    return { categories, carregarCategories }
}