import { useState, useEffect } from 'react'
import axiosClient from './auth'

/**
 * Hook personalitzat per gestionar les peticions relacionades amb els menús.
 * Proporciona l’estat i les funcions per carregar, crear, actualitzar i eliminar menús des del backend.
 *
 * @function useAxiosPeticionsMenus
 * @returns {Object} Objecte amb:
 *  - {Array} menus – Llista de menús obtinguda del servidor  
 *  - {Function} carregarMenus – Funció per recarregar la llista de menús  
 *  - {Function} crearMenus – Funció per crear un nou menú  
 *  - {Function} actualitzarMenus – Funció per actualitzar un menú existent  
 *  - {Function} eliminarMenus – Funció per eliminar un menú  
 */
export const useAxiosPeticionsMenus = () => {

    /**
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
     * @param {*} idMenu
     * @param {*} nouMenu
     * @description Funció per actualitzar un menus
     */
    const actualitzarMenus = async (idMenu, nouMenu) => {
        try {
            const resposta = await axiosClient.put(`/menu/${idMenu}`, nouMenu, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setMenus(menus.map(menu => menu.id === idMenu ? resposta.data : menu))
        } catch (error) {
            console.error('Error actualitzant el menus:', error.response?.data)
        }
    }

    /**
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