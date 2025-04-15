import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UsuarisContext = createContext();
const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api"
})

export const UsuarisProvider = ({ children }) => {
    // Estat per guardar la llista d'usuaris
    const [usuaris, setUsuaris] = useState([])

    useEffect(() => {
        carregarUsuaris()
    }, [])

    // Funció per obtenir els usuaris del backend
    const carregarUsuaris = async () => {
        try {
            const resposta = await axiosClient.get('/usuaris');
            setUsuaris(resposta.data)
        } catch (error) {
            console.log("Error obtenint els usuaris:", error)
        }
    }
    /**
     * Funció per crear un nou usuari
     * @param {*} nouUsuari 
     */
    const crearUsuari = async (nouUsuari) => {
        try {
            const resposta = await axiosClient.post('/usuaris', nouUsuari, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("Usuari creat:", resposta.data)
            //await carregarUsuaris()
            setUsuaris([...usuaris, resposta.data])
        } catch (error) {
            console.error("Error creant l'usuari:", error.response?.data)
        }
    }

    // Funció per eliminar un usuari
    const eliminarUsuari = async (idUsuari) => {
        console.log('Que ha pasado')
        try {
            await axiosClient.delete(`/usuaris/${idUsuari}`)
            //await carregarUsuaris()
            setUsuaris(usuaris.filter(usuari => usuari.id !== idUsuari));
        } catch (error) {
            console.log("Error eliminant l'usuari:", error)
        }
    };
    const actualitzarUsuari = async (idUsuari, usuariActualitzat) => {
        try {
            const resposta = await axiosClient.put(`/usuaris/${idUsuari}`, usuariActualitzat, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log('Usuari actualitzat', resposta.data)
            setUsuaris(usuaris.map(usuari => usuari.id === idUsuari ? resposta.data : usuari))
        } catch (error) {
            console.error('Error actualitzant usuari:', error.response?.data)
        }
    };

    return (
        <UsuarisContext.Provider value={{ usuaris, crearUsuari, eliminarUsuari, actualitzarUsuari }}>
            {children}
        </UsuarisContext.Provider>
    )
}

export const useUsuaris = () => useContext(UsuarisContext);