import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api' /* API */
})

export const useAxiosPeticionsMenusApats = () => {

    /**
     * @author Albert
     * @description Estat per guardar la llista de menusApats
     */
    const [menusApats, setMenusApats] = useState([])

    /**
     * @author Albert
     * @description Funció per obtenir els menusApats del backend
     */
    const carregarMenusApats = async () => {
        console.log('Carregant... (MenusApats)')
        try {
            const resposta = await axiosClient.get('/menu-apat');
            setMenusApats(resposta.data)
        } catch (error) {
            console.log('Error obtenint els menusApats:', error)
        }
    }

    /**
     * @author Albert
     * @param {*} nouMenuApats
     * @description Funció per crear un nou menuApats
     */
    const crearMenusApats = async (nouMenuApats) => {
        console.log('MenusApats abans de crear:', nouMenuApats)
        try {
            const resposta = await axiosClient.post('/menu-apat', nouMenuApats, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log('MenusApats creat:', resposta.data)
            await carregarMenusApats()
        } catch (error) {
            console.error('Error creant el menusApats:', error.response?.data)
        }
    }

    /**
     * @author Albert
     * @param {*} idMenuApats
     * @description Funció per eliminar un menuApats
     */
    const eliminarMenuApats = async (idMenuApats) => {
        try {
            await axiosClient.delete(`/menu-apat/${idMenuApats}`)
            await carregarMenusApats()
        } catch (error) {
            console.log('Error eliminant el menusApats:', error)
        }
    }

    /*useEffect(() => {
        carregarMenusApats()
    }, [])*/

    return { menusApats, carregarMenusApats, crearMenusApats, eliminarMenuApats }
}