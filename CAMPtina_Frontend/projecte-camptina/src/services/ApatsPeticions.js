import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api' /* API */
})

export const useAxiosPeticions = () => {

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
            console.log("",resposta.data)
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
            console.log('Àpat creat:', resposta.data)
            await carregarApats()
        } catch (error) {
            console.error('Error creant l\'àpat:', error.response?.data)
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
            await carregarApats()
        } catch (error) {
            console.log('Error eliminant l\'àpat:', error)
        }
    }

    useEffect(() => {
        carregarApats()
    }, [])

    return { apats, carregarApats, crearApat, eliminarApat }
}