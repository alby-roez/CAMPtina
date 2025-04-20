import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

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
        console.log('Carregant... (Apats)')
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
            setApats([...apats, resposta.data])
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
        console.log('Àpat Abans de actualitzar:', nouApat)
        try {
            const resposta = await axiosClient.put(`/${idApat}`, nouApat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log('Àpat actualitzat:', resposta.data)
            await carregarApats()
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

    /*useEffect(() => {
        carregarApats()
    }, [])*/

    return { apats, carregarApats, crearApat, actualitzarApat, eliminarApat }
}