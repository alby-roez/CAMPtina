import { useState, useEffect } from 'react'
import axiosClient from './auth'

/**
* Hook personalitzat per gestionar la lògica relacionada amb els torns del sistema.
*
* @function useAxiosPeticionsTorns
* @returns {Object} Objecte amb les funcions i estat dels torns:
* - {Array} torns – Llista de torns
* - {Function} carregarTorns – Carrega els torns del backend
* - {Function} crearTorn – Crea un nou torn
* - {Function} actualitzarTorn – Actualitza un torn existent
* - {Function} eliminarTorn – Elimina un torn
*/
export const useAxiosPeticionsTorns = () => {

    /**
     * Estat per guardar la llista de torns.
     * @type {Array}
     */
    const [torns, setTorns] = useState([])

     /**
     * Carrega els torns de la base de dades.
     * @async
     * @function carregarTorns
     * @returns {Promise<void>}
     */
    const carregarTorns = async () => {
        try {
            const resposta = await axiosClient.get('/torn');
            setTorns(resposta.data)
        } catch (error) {
            console.log('Error obtenint els torns:', error)
        }
    }

    /**
     * Crea un nou torn al sistema.
     * @async
     * @function crearTorn
     * @param {*} nouTorn - Objecte amb les dades del torn
     * @returns {Promise<void>}
     */
    const crearTorn = async (nouTorn) => {
        try {
            const resposta = await axiosClient.post('/torn', nouTorn, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log('Torn creat:', resposta.data)
            await carregarTorns()
           //setTorns([...torns, resposta.data])
        } catch (error) {
            console.error('Error creant el torn:', error.response?.data)
        }
    }

    /**
     * Actualitza un torn existent.
     * @async
     * @function actualitzarTorn
     * @param {*} idTorn - ID del torn a modificar
     * @param {*} tornActualitzat - Dades actualitzades del torn
     * @returns {Promise<void>}
     */
    const actualitzarTorn = async (idTorn, tornActualitzat) => {
        try {
            const resposta = await axiosClient.put(`/torn/${idTorn}`, tornActualitzat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log('Torn actualitzat:', resposta.data)
            await carregarTorns()
            //setTorns(torns.map(torn => torn.id === idTorn ? resposta.data : torn))
        } catch (error) {
            console.error('Error actualitzant el torn:', error.response?.data)
        }
    }

     /**
     * Elimina un torn existent.
     * @async
     * @function eliminarTorn
     * @param {*} idTorn - ID del torn a eliminar
     * @returns {Promise<void>}
     */
    const eliminarTorn = async (idTorn) => {
        try {
            await axiosClient.delete(`/torn/${idTorn}`)
            await carregarTorns()
            //setTorns(torns.filter(torn => torn.id !== idTorn));
        } catch (error) {
            console.log('Error eliminant el torn:', error)
        }
    }

    useEffect(() => {
        carregarTorns()
    }, [])

    return { torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn }
}