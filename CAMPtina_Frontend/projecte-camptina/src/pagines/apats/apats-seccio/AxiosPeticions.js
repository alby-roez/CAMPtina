import { useState } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:3658/m1/860546-841415-default' /* API */
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
            console.log(resposta.data)
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
        console.log('Àpat Abans de crear:', nouApat)
        try {
            const resposta = await axiosClient.post('/apats', nouApat, {
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
            await axiosClient.delete(`/apats/${idApat}`)
            await carregarApats()
        } catch (error) {
            console.log('Error eliminant l\'àpat:', error)
        }
    }

    return { apats, carregarApats, crearApat, eliminarApat }
}