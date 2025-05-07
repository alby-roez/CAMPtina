import { useState, useEffect } from 'react'
import axiosClient from './auth'

/**
 * @description Hook personalitzat per gestionar usuaris.
 *
 * @function useAxiosPeticionsUsuaris
 * @returns {Object} Funcions i estats relacionats amb els usuaris:
 *  - {Array} usuaris – Llista de tots els usuaris
 *  - {Function} carregarUsuaris – Carrega la llista d’usuaris
 *  - {Function} crearUsuari – Crea un nou usuari
 *  - {Function} actualitzarUsuari – Actualitza un usuari existent
 *  - {Function} eliminarUsuari – Elimina un usuari
 */
export const useAxiosPeticionsUsuaris = () => {

   /** @type {Array} */
    const [usuaris, setUsuaris] = useState([])

    /**
     * Carrega tots els usuaris des del backend.
     * @async
     * @function carregarUsuaris
     * @returns {Promise<void>}
     */
    const carregarUsuaris = async () => {
        try {
            const resposta = await axiosClient.get('/usuaris');
            setUsuaris(resposta.data)
        } catch (error) {
            console.log("Error obtenint els usuaris:", error)
        }
    }

    /**
     * Crea un nou usuari.
     * @async
     * @function crearUsuari
     * @param {Object} nouUsuari - Dades de l'usuari a crear
     * @returns {Promise<void>}
     */
    const crearUsuari = async (nouUsuari) => {
        try {
            const resposta = await axiosClient.post('/usuaris', nouUsuari, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setUsuaris([... usuaris, resposta.data])
        } catch (error) {
            console.error("Error creant l'usuari:", error.response?.data)
        }
    }

    /**
     * Actualitza un usuari existent.
     * @async
     * @function actualitzarUsuari
     * @param {number|string} idUsuari - ID de l'usuari
     * @param {Object} usuariActualitzat - Dades actualitzades de l'usuari
     * @returns {Promise<void>}
     */
    const actualitzarUsuari = async (idUsuari, usuariActualitzat) => {
        try {
            const resposta = await axiosClient.put(`/usuaris/${idUsuari}`, usuariActualitzat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setUsuaris(usuaris.map(usuari => usuari.id === idUsuari ? resposta.data : usuari))
        } catch (error) {
            console.error('Error actualitzant usuari:', error.response?.data)
        }
    }

    /**
     * Elimina un usuari per ID.
     * @async
     * @function eliminarUsuari
     * @param {number|string} idUsuari - ID de l'usuari a eliminar
     * @returns {Promise<void>}
     */
    const eliminarUsuari = async (idUsuari) => {
        try {
            await axiosClient.delete(`/usuaris/${idUsuari}`)
            setUsuaris(usuaris.filter(usuari => usuari.id !== idUsuari));
        } catch (error) {
            console.log("Error eliminant l'usuari:", error)
        }
    };

    useEffect(() => {
        carregarUsuaris()
    }, [])

    return { usuaris, carregarUsuaris, crearUsuari, actualitzarUsuari, eliminarUsuari }
}