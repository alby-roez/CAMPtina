import { useState, useEffect } from 'react'
import axiosClient from './auth'

/**
 * @description Hook personalitzat per gestionar reserves d’àpats.
 *
 * @function useAxiosPeticionsTriarApats
 * @returns {Object} Funcions i estats relacionats amb les reserves:
 *  - {Array} reserva – Totes les reserves
 *  - {Object} reservaId – Reserva per ID
 *  - {Object|null} reservaIdUsuari – Reserva per ID d’usuari
 *  - {Function} carregarReserva – Carrega totes les reserves
 *  - {Function} carregarReservaId – Carrega una reserva concreta per ID
 *  - {Function} carregarReservaIdUsuari – Carrega reserva segons ID d’usuari
 *  - {Function} obtenirReservaUsuari – Obté la primera reserva detallada d’un usuari
 *  - {Function} crearReserva – Crea una nova reserva
 *  - {Function} actualitzarReserva – Actualitza una reserva existent
 *  - {Function} eliminarReserva – Elimina una reserva
 */
export const useAxiosPeticionsTriarApats = () => {

    /**
     * @type {Array}
     */
    const [reserva, setReserva] = useState([])

    /**
     * @type {Object}
     */
    const [reservaId, setReservaId] = useState([])

    /**
     * @type {Object|null}
     */
    const [reservaIdUsuari, setReservaIdUsuari] = useState(null)

    /**
     * @description Carrega totes les reserves.
     * @async
     * @function carregarReserva
     * @returns {Promise<void>}
     */
    const carregarReserva = async () => {
        try {
            const resposta = await axiosClient.get('/reserva');
            setReserva(resposta.data)
        } catch (error) {
            console.log('Error obtenint la reserva:', error)
        }
    }

    /**
     * @description Carrega una reserva específica per ID.
     * @async
     * @function carregarReservaId
     * @param {number|string} idReserva - ID de la reserva
     * @returns {Promise<void>}
     */
    const carregarReservaId = async (idReserva) => {
        try {
            const resposta = await axiosClient.get(`/reserva/${idReserva}`);
            setReservaId(resposta.data)
        } catch (error) {
            console.log('Error obtenint la reserva de l\'Id:', error)
        }
    }

    /**
     * @description Carrega la reserva associada a un usuari.
     * @async
     * @function carregarReservaIdUsuari
     * @param {number|string} idReservaUsuari - ID de l'usuari
     * @returns {Promise<void>}
     */
    const carregarReservaIdUsuari = async (idReservaUsuari) => {
        try {
            const resposta = await axiosClient.get(`/reserva/usuari/${idReservaUsuari}`);
            setReservaIdUsuari(resposta.data)
        } catch (error) {
            console.log('Error obtenint la reserva de l\'Id del usuari:', error)
        }
    }

    /**
     * @description Obté la primera reserva detallada d’un usuari.
     * @async
     * @function obtenirReservaUsuari
     * @param {number|string} idUsuari - ID de l'usuari
     * @returns {Promise<Object>} Dades de la reserva
     */
    const obtenirReservaUsuari = async (idUsuari) => {
        try {
            const resposta = await axiosClient.get(`/reserva/reservausuari/${idUsuari}`);
            setReservaIdUsuari(resposta.data);
            return resposta.data;
        } catch (error) {
            console.error('Error obtenint la reserva: ', error);
            throw error;
        }
    };

     /**
     * @description Crea una nova reserva.
     * @async
     * @function crearReserva
     * @param {Object} novaReserva - Dades de la nova reserva
     * @returns {Promise<void>}
     */
    const crearReserva = async (novaReserva) => {
        try {
            const resposta = await axiosClient.post('/reserva', novaReserva, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            await carregarReserva()
        } catch (error) {
            console.error('Error creant la reserva:', error.response?.data)
        }
    }

    /**
     * @description Actualitza una reserva existent.
     * @async
     * @function actualitzarReserva
     * @param {number|string} idReserva - ID de la reserva
     * @param {Object} novaReserva - Dades actualitzades
     * @returns {Promise<void>}
     */
    const actualitzarReserva = async (idReserva, novaReserva) => {
        try {
            const resposta = await axiosClient.put(`/reserva/${idReserva}`, novaReserva, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setReserva(reserva.map(reserva => reserva.id === idReserva ? resposta.data : reserva))
        } catch (error) {
            console.error('Error actualitzant la reserva:', error.response?.data)
        }
    }

    /**
     * @description Elimina una reserva existent.
     * @async
     * @function eliminarReserva
     * @param {number|string} idReserva - ID de la reserva
     * @returns {Promise<void>}
     */
    const eliminarReserva = async (idReserva) => {
        try {
            await axiosClient.delete(`/reserva/${idReserva}`)
            setReservaIdUsuari(null)
            setReserva(reserva.filter(reserva => reserva.id !== idReserva));
            await carregarReserva()
        } catch (error) {
            console.log('Error eliminant la reserva:', error)
        }
    }

    useEffect(() => {
        carregarReserva()
    }, [])

    return { reserva, reservaId, reservaIdUsuari, carregarReserva, carregarReservaId, carregarReservaIdUsuari, crearReserva, actualitzarReserva, eliminarReserva, obtenirReservaUsuari }
}