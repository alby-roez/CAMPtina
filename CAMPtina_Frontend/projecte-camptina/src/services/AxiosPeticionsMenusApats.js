import { useState, useEffect } from 'react'
import { useMenus } from '../pagines/apats/menus-seccio/LogicaMenus.js'
import axiosClient from './auth.js'

/**
* Hook personalitzat per gestionar les peticions relacionades amb la relació entre menús i àpats.
* Proporciona funcions per carregar, crear i eliminar menús-àpats i per obtenir el contingut complet d'un menú.
*
* @function useAxiosPeticionsMenusApats
* @returns {Object} Objecte amb:
*  - {Array} menusApats – Llista de menús-àpats  
*  - {Array} menusIdApats – Llista d'IDs de menús-àpats (actualment sense ús actiu)  
*  - {Function} carregarMenusApats – Funció per obtenir tots els menús-àpats  
*  - {Function} carregarMenusComplet – Funció per obtenir els àpats complet d’un menú específic  
*  - {Function} crearMenusApats – Funció per crear una relació menú-àpat  
*  - {Function} eliminarMenuApats – Funció per eliminar una relació menú-àpat
*/
export const useAxiosPeticionsMenusApats = () => {
    const { setMenuPrimer, setMenuSegon, setMenuPostres } = useMenus()

    /**
    * @description Estat per guardar la llista de menusApats
    * @type {Array}
    */
    const [menusApats, setMenusApats] = useState([])

    /**
    * Estat per guardar IDs específics de menús-àpats.
    * @type {Array}
    */
    const [menusIdApats, setMenusIdApats] = useState([])

    /**
    * Carrega tots els menús-àpats des del backend.
    * @async
    * @function carregarMenusApats
    * @returns {Promise<void>}
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
    * Carrega els àpats d’un menú concret i els assigna a les seves categories.
    * @async
    * @function carregarMenusComplet
    * @param {number|string} idMenu – ID del menú a carregar
    * @returns {Promise<{primer: Array, segon: Array, postres: Array}>}
    */
    const carregarMenusComplet = async (idMenu) => {
        try {
            const resposta = await axiosClient.get(`/menu/menu-complet/${idMenu}`);
            const dades = resposta.data;
            const apatsPerCategoria = dades.apatsPerCategoria || {}; 
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
        return {primer:[], segon: [], postres:[]};
    }

    /**
    * Crea una nova relació menú-àpat al backend.
    * @async
    * @function crearMenusApats
    * @param {Object} nouMenuApats – Objecte amb les dades del nou menú-àpat
    * @returns {Promise<void>}
    */
    const crearMenusApats = async (nouMenuApats) => {
        try {
            const resposta = await axiosClient.post('/menu-apat', nouMenuApats, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            carregarMenusComplet(1)
            carregarMenusApats()
        } catch (error) {
            console.error('Error creant el menusApats:', error.response?.data)
        }
    }

    /**
    * Elimina una relació menú-àpat donats els seus IDs.
    * @async
    * @function eliminarMenuApats
    * @param {number|string} idMenu – ID del menú
    * @param {number|string} idApat – ID de l’àpat
    * @returns {Promise<void>}
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