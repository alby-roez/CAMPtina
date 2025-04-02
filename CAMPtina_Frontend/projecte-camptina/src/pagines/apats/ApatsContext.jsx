import { createContext, useContext, useState, useEffect } from "react"; 
import axios from "axios";

const ApatsContext = createContext();

export const ApatsProvider = ({ children }) => {
    // Estat per guardar la llista d'apats
    const [apats, setApats] = useState([])

    useEffect(() => {
        carregarApats()
    }, [])

    // Funció per obtenir els àpats del backend
    const carregarApats = async () => {
        try {
            const resposta = await axios.get('http://localhost:8080/api/apats')
            setApats(resposta.data)
        } catch (error) {
            console.log("Error obtenint els apats:", error)
        }
    }

     // Funció per crear un nou àpat
    const crearApat = async (nouApat) => {
        try {
            const resposta = await axios.post('http://localhost:8080/api', nouApat, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("Apat creat:", resposta.data)
            await carregarApats()
        } catch (error) {
            console.error("Error creant l'àpat:", error.response?.data)
        }
    }

    // Funció per eliminar un àpat
    const eliminarApat = async (idApat) => {
        console.log('QUe ha pasado')
        try {
            await axios.delete(`http://localhost:8080/api/${idApat}`)
            await carregarApats()
        } catch (error) {
            console.log("Error eliminant l'àpat:", error)
        }
    }

    return (
        <ApatsContext.Provider value={{ apats, crearApat, eliminarApat }}>
            {children}
        </ApatsContext.Provider>
    )
}

export const useApats = () => useContext(ApatsContext);