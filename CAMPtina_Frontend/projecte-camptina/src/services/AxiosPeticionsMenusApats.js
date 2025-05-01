import { useState, useEffect } from 'react'
import { useMenus } from '../pagines/apats/menus-seccio/LogicaMenus.js'
import axiosClient from './auth.js'


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
            //setMenusApats(resposta.data)
            const dades = resposta.data;
            /* MALA PRACTICA O BONA NO SE A- */
            /*if (true) {
                setMenuPrimer([])
                setMenuSegon([])
                setMenuPostres([])
            }*/
            //setMenuPrimer(resposta.data.apatsPerCategoria.PRIMER)
            //setMenuSegon(resposta.data.apatsPerCategoria.SEGON)
            //setMenuPostres(resposta.data.apatsPerCategoria.POSTRE)
            const apatsPerCategoria = dades.apatsPerCategoria || {}; // Si no existeix, objecte buit
            const primer = Array.isArray(apatsPerCategoria.PRIMER) ? apatsPerCategoria.PRIMER : [];
            const segon = Array.isArray(apatsPerCategoria.SEGON) ? apatsPerCategoria.SEGON : [];
            const postres = Array.isArray(apatsPerCategoria.POSTRE) ? apatsPerCategoria.POSTRE : [];

            setMenuPrimer(primer);
            setMenuSegon(segon);
            setMenuPostres(postres);

            /* MALA PRACTICA O BONA NOSE -Z */
        } catch (error) {
            console.log('Error obtenint els menus:', error)
            setMenuPrimer([]);
            setMenuSegon([]);
            setMenuPostres([]);
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
     * @description Funció per eliminar un menuApats
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