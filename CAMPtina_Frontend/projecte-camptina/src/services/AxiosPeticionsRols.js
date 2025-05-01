import { useState, useEffect } from 'react'
import axiosClient from './auth'

export const useAxiosPeticionsRols = () => {

    /**
     * @author ...
     * @description Estat per guardar la llista de rols
     */
    const [rols, setRols] = useState([])
    
    /**
     * @author ...
     * @description Funció per obtenir els rols de la base de dades
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