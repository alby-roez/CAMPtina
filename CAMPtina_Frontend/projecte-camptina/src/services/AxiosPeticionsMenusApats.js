import { useState, useEffect } from 'react'
import axios from 'axios'
import { useMenus } from '../pagines/apats/menus-seccio/LogicaMenus.js'

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api' //import.meta.env.VITE_API_URL /* API */
})

export const useAxiosPeticionsMenusApats = () => {

    const { setMenuPrimer, setMenuSegon, setMenuPostres } = useMenus()

    /**
     * @author Albert
     * @description Estat per guardar la llista de menusApats
     */
    const [menusApats, setMenusApats] = useState([])

    /**
     * @author Albert
     * @description Estat per guardar ID de la llista de menusApats
     */
    const [menusIdApats, setMenusIdApats] = useState([])

    /**
     * @author Albert
     * @description Funció per obtenir els menusApats del backend
     */
    const carregarMenusApats = async () => {
        try {
            const resposta = await axiosClient.get('/menu-apat');
            setMenusIdApats(resposta.data)
        } catch (error) {
            console.log('Error obtenint els menusApats:', error)
        }
    }

    /**
     * @author Albert
     * @param {*} idMenu
     * @description Funció per obtenir els apats dels menus del backend
     */
    const carregarMenusComplet = async (idMenu) => {
        try {
            const resposta = await axiosClient.get(`/menu/menu-complet/${idMenu}`);
            setMenusApats(resposta.data)
            /* MALA PRACTICA O BONA NO SE A- */
            /*if (true) {
                setMenuPrimer([])
                setMenuSegon([])
                setMenuPostres([])
            }*/
            setMenuPrimer(resposta.data.apatsPerCategoria.PRIMER)
            setMenuSegon(resposta.data.apatsPerCategoria.SEGON)
            setMenuPostres(resposta.data.apatsPerCategoria.POSTRE)
            /* MALA PRACTICA O BONA NOSE -Z */
        } catch (error) {
            console.log('Error obtenint els menus:', error)
        }
    }

    /**
     * @author Albert
     * @param {*} nouMenuApats
     * @description Funció per crear un nou menuApats
     */
    const crearMenusApats = async (nouMenuApats) => {
        try {
            const resposta = await axiosClient.post('/menu-apat', nouMenuApats, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            //console.log('MenusApats creat:', resposta.data)
            carregarMenusComplet(1)
            carregarMenusApats()
        } catch (error) {
            console.error('Error creant el menusApats:', error.response?.data)
        }
    }

    /**
     * @author Albert
     * @param {*} idMenu
     * @param {*} idApat
     * @description Funció per eliminar un Apat d'un menu
     */
    const eliminarMenuApats = async (idMenu, idApat) => {
        try {
            await axiosClient.delete(`/menu-apat/${idMenu}/${idApat}`)
            //carregarMenusComplet(1)
            //carregarMenusApats()
        } catch (error) {
            console.log('Error eliminant el menusApats:', error)
        }
    }

    useEffect(() => {
        carregarMenusComplet(1) //MALA PRACTICA
        carregarMenusApats()
    }, [])

    return { menusApats, menusIdApats, carregarMenusApats, carregarMenusComplet, crearMenusApats, eliminarMenuApats }
}