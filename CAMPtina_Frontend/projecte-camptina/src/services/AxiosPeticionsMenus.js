import { useState, useEffect } from 'react'
import axiosClient from './auth'

export const useAxiosPeticionsMenus = () => {

    /**
     * @author Albert
     * @description Estat per guardar la llista de menus
     */
    const [menus, setMenus] = useState([])

    /**
     * @author Albert
     * @description Funció per obtenir els menus del backend
     */
    const carregarMenus = async () => {
        try {
            const resposta = await axiosClient.get('/menu');
            setMenus(resposta.data)
        } catch (error) {
            console.log('Error obtenint els menus:', error)
        }
    }

    /**
     * @author Albert
     * @param {*} nouMenu
     * @description Funció per crear un nou menus
     */
    const crearMenus = async (nouMenu) => {
        try {
            const resposta = await axiosClient.post('/menu', nouMenu, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            //console.log('Menus creat:', resposta.data)
            setMenus([... menus, resposta.data])
        } catch (error) {
            console.error('Error creant el menus:', error.response?.data)
        }
    }

    /**
     * @author Albert
     * @param {*} nouMenu
     * @description Funció per actualitzar un menus
     */
    const actualitzarMenus = async (nouMenu) => {
        try {
            const resposta = await axiosClient.put(`/menu/${nouMenu}`, nouMenu, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setMenus(menus.map(menu => menu.id === nouMenu ? resposta.data : menu))
        } catch (error) {
            console.error('Error actualitzant el menus:', error.response?.data)
        }
    }

    /**
     * @author Albert
     * @param {*} idMenu
     * @description Funció per eliminar un menus
     */
    const eliminarMenus = async (idMenu) => {
        try {
            await axiosClient.delete(`/menu/${idMenu}`)
            setMenus(menus.filter(menu => menu.id !== idMenu));
            await carregarMenus()
        } catch (error) {
            console.log('Error eliminant el menus:', error)
        }
    }

    useEffect(() => {
        carregarMenus()
    }, [])

    return { menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus }
}