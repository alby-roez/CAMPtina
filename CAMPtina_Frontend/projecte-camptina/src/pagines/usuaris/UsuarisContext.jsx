import { createContext, useContext, useState, useEffect } from "react"; 
import axios from "axios";

const UsuarisContext = createContext();

export const UsuarisProvider = ({ children }) => {
    // Estat per guardar la llista d'usuaris
    const [usuaris, setUsuaris] = useState([])

    useEffect(() => {
        carregarUsuaris()
    }, [])

    // Funció per obtenir els usuaris del backend
    const carregarUsuaris = async () => {
        try {
            const resposta = await axios.get('http://localhost:8080/api/apats')
            setUsuaris(resposta.data)
        } catch (error) {
            console.log("Error obtenint els usuaris:", error)
        }
    }

     // Funció per crear un nou usuari
    const crearUsuari = async (nouUsuari) => {
        try {
            const resposta = await axios.post('http://localhost:8080/usuari', nouUsuari, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("Usuari creat:", resposta.data)
            await carregarUsuaris()
        } catch (error) {
            console.error("Error creant l'usuari:", error.response?.data)
        }
    }

    // Funció per eliminar un usuari
    const eliminarUsuari = async (idUsuari) => {
        console.log('Que ha pasado')
        try {
            await axios.delete(`http://localhost:8080/api/${idUsuari}`)
            await carregarUsuaris()
        } catch (error) {
            console.log("Error eliminant l'usuari:", error)
        }
    }

    return (
        <UsuarisContext.Provider value={{ usuaris, crearUsuari, eliminarUsuari }}>
            {children}
        </UsuarisContext.Provider>
    )
}

export const useUsuaris = () => useContext(UsuarisContext);