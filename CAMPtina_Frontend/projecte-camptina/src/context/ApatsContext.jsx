import { createContext, useContext } from "react"; 
import { useAxiosPeticions } from "../services/ApatsPeticions";

const ApatsContext = createContext();

export const ApatsProvider = ({ children }) => {
    const { apats, carregarApats, crearApat, eliminarApat } = useAxiosPeticions();

    return (
        <ApatsContext.Provider value={{ apats, carregarApats, crearApat, eliminarApat }}>
            {children}
        </ApatsContext.Provider>
    )
}

export const useApats = () => useContext(ApatsContext);