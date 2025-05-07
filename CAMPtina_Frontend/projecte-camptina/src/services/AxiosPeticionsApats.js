import { useState, useEffect } from 'react'
import axiosClient from './auth'


/**
 * @description Hook personalitzat per gestionar les peticions relacionades amb els àpats.
 * Inclou funcionalitat per carregar, crear, actualitzar i eliminar àpats.
 *
 * @function
 * @returns {Object} Objecte amb els mètodes i estat relacionats amb àpats
 * @property {Array} apats - Llista d'àpats obtinguda del backend
 * @property {Function} carregarApats - Funció per carregar àpats
 * @property {Function} crearApat - Funció per crear un nou àpat
 * @property {Function} actualitzarApat - Funció per actualitzar un àpat existent
 * @property {Function} eliminarApat - Funció per eliminar un àpat
 */
export const useAxiosPeticionsApats = () => {

    /**
     * @author Miquel & Albert
     * @description Estat per guardar la llista d'àpats
     */
    const [apats, setApats] = useState([])

    /**
     * @author Miquel & Albert
     * @description Funció per obtenir els àpats del backend
     */
    const carregarApats = async () => {
        try {
            const resposta = await axiosClient.get('/apats');
            setApats(resposta.data)
        } catch (error) {
            console.log('Error obtenint els àpats:', error)
        }
    }

    /**
     * @author Miquel & Albert
     * @param {*} nouApat
     * @description Funció per crear un nou àpat
     */
    const crearApat = async (nouApat) => {
        try {
            const resposta = await axiosClient.post('', nouApat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            await carregarApats()
        } catch (error) {
            console.error('Error creant l\'àpat:', error.response?.data)
        }
    }

   /**
    * @author Miquel & Albert
    * @param {*} idApat
    * @param {*} nouApat
    * @description Funció per actualitzar un àpat
    */
    const actualitzarApat = async (idApat, nouApat) => {
        try {
            const resposta = await axiosClient.put(`/${idApat}`, nouApat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setApats(apats.map(apat => apat.id === idApat ? resposta.data : apat))
        } catch (error) {
            console.error('Error actualitzant l\'àpat:', error.response?.data)
        }
    }

    /**
     * @author Miquel & Albert
     * @param {*} idApat
     * @description Funció per eliminar un àpat
     */
    const eliminarApat = async (idApat) => {
        try {
            await axiosClient.delete(`/${idApat}`)
            setApats(apats.filter(apat => apat.id !== idApat));
            await carregarApats()
        } catch (error) {
            console.log('Error eliminant l\'àpat:', error)
        }
    }

    useEffect(() => {
        carregarApats()
    }, [])

    return { apats, carregarApats, crearApat, actualitzarApat, eliminarApat }
}