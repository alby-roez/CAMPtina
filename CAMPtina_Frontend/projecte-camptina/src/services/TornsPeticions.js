import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

export const useAxiosPeticions = () => {

    const [torns, setTorns] = useState([])

    const carregarTorns = async () => {
        try {
            const resposta = await axiosClient.get('/torn');
            setTorns(resposta.data)
            console.log("",resposta.data)
        } catch (error) {
            console.log('Error obtenint els torns:', error)
        }
    }

    
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