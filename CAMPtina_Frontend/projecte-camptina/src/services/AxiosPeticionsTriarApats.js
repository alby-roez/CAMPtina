import { useState, useEffect } from 'react'
import axiosClient from './auth'

export const useAxiosPeticionsTriarApats = () => {

    /**
     * @author Albert
     * @description Estat per guardar la reserva
     */
    const [reserva, setReserva] = useState([])

    /**
     * @author Albert
     * @description Estat per guardar la reserva per Id
     */
    const [reservaId, setReservaId] = useState([])

    /**
     * @author Albert
     * @description Estat per guardar la reserva per Id de usuari
     */
    const [reservaIdUsuari, setReservaIdUsuari] = useState(null)

    /**
     * @author Albert
     * @description Funció per obtenir la reserva del backend
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
     * @author Albert
     * @param {*} idReserva
     * @description Funció per obtenir la reserva de l'Id del backend
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
     * @author Albert
     * @param {*} idReservaUsuari
     * @description Funció per obtenir la reserva de l'Id del usuari del backend
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
     * @author Palmira
     * @param {*} idUsuari 
     * @description Funció per obtenir la primera reserva de forma detallada de l'usuari entrat per paràmetre
     */
    const obtenirReservaUsuari = async (idUsuari) => {
        try {
            const resposta = await axiosClient.get(`/reserva/reservausuari/${idUsuari}`);
            setReservaIdUsuari(resposta.data);
            console.log('Reserva previ crida:', resposta.data)
            return resposta.data;
        } catch (error) {
            console.error('Error obtenint la reserva: ', error);
            throw error;
        }
    };

    /**
     * @author Albert
     * @param {*} novaReserva
     * @description Funció per crear una reserva
     */
    const crearReserva = async (novaReserva) => {
        try {
            const resposta = await axiosClient.post('/reserva', novaReserva, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log('Reserva creada:', resposta.data)
            await carregarReserva()
        } catch (error) {
            console.error('Error creant la reserva:', error.response?.data)
        }
    }

    /**
     * @author Albert
     * @param {*} idReserva
     * @param {*} novaReserva
     * @description Funció per actualitzar una reserva
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
     * @author Albert
     * @param {*} idReserva
     * @description Funció per eliminar una reserva
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