import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

export const useAxiosPeticionsTorns = () => {

    /**
     * @author ...
     * @description Estat per guardar la llista de torns
     */
    const [torns, setTorns] = useState([])

    /**
     * @author ...
     * @description Funció per obtenir els torns de la base de dades
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
     * @author ...
     * @param {*} nouTorn
     * @description Funció per crear un nou torn
     */
    const crearTorn = async (nouTorn) => {
        try {
            const resposta = await axiosClient.post('/torn', nouTorn, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            //console.log('Torn creat:', resposta.data)
            setTorns([... torns, resposta.data])
        } catch (error) {
            console.error('Error creant el torn:', error.response?.data)
        }
    }

    /**
     * @author ...
     * @param {*} idTorn
     * @param {*} tornActualitzat
     * @description Funció per actualitzar un torn
     */
    const actualitzarTorn = async (idTorn, tornActualitzat) => {
        try {
            const resposta = await axiosClient.put(`/torn/${idTorn}`, tornActualitzat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setTorns(torns.map(torn => torn.id === idTorn ? resposta.data : torn))
        } catch (error) {
            console.error('Error actualitzant el torn:', error.response?.data)
        }
    }

    /**
     * @author ...
     * @param {*} idTorn
     * @description Funció per eliminar un torn
     */
    const eliminarTorn = async (idTorn) => {
        try {
            await axiosClient.delete(`/torn/${idTorn}`)
            setTorns(torns.filter(torn => torn.id !== idTorn));
            await carregarTorns()
        } catch (error) {
            console.log('Error eliminant el torn:', error)
        }
    }

    useEffect(() => {
        carregarTorns()
    }, [])

    return { torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn }
}