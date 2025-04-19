import { useState, useEffect } from 'react'
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api" //import.meta.env.VITE_API_URL /* API */
})

export const useAxiosPeticionsUsuaris = () => {

    /**
     * @author ...
     * @description Estat per guardar la llista d'usuaris
     */
    const [usuaris, setUsuaris] = useState([])

    /**
     * @author ...
     * @description Funció per obtenir els usuaris del backend
     */
    const carregarUsuaris = async () => {
        try {
            const resposta = await axiosClient.get('/usuaris');
            setUsuaris(resposta.data)
        } catch (error) {
            console.log("Error obtenint els usuaris:", error)
        }
    }

    /**
     * @author ...
     * @param {*} nouUsuari
     * @description Funció per crear un nou usuari
     */
    const crearUsuari = async (nouUsuari) => {
        try {
            const resposta = await axiosClient.post('/usuaris', nouUsuari, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            //console.log("Usuari creat:", resposta.data)
            setUsuaris([... usuaris, resposta.data])
        } catch (error) {
            console.error("Error creant l'usuari:", error.response?.data)
        }
    }

    /**
     * @author ...
     * @param {*} idUsuari
     * @param {*} usuariActualitzat
     * @description Funció per actualitzar un usuari
     */
    const actualitzarUsuari = async (idUsuari, usuariActualitzat) => {
        try {
            const resposta = await axiosClient.put(`/usuaris/${idUsuari}`, usuariActualitzat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setUsuaris(usuaris.map(usuari => usuari.id === idUsuari ? resposta.data : usuari))
        } catch (error) {
            console.error('Error actualitzant usuari:', error.response?.data)
        }
    }

    /**
     * @author ...
     * @param {*} idUsuari
     * @description Funció per eliminar un usuari
     */
    const eliminarUsuari = async (idUsuari) => {
        try {
            await axiosClient.delete(`/usuaris/${idUsuari}`)
            //await carregarUsuaris()
            setUsuaris(usuaris.filter(usuari => usuari.id !== idUsuari));
        } catch (error) {
            console.log("Error eliminant l'usuari:", error)
        }
    };

    useEffect(() => {
        carregarUsuaris()
    }, [])

    return { usuaris, carregarUsuaris, crearUsuari, actualitzarUsuari, eliminarUsuari }
}