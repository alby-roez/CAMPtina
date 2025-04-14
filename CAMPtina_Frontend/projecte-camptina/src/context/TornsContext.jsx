import { createContext, useContext } from "react"; 
import { useAxiosPeticions } from "../services/TornsPeticions";


const TornsContext = createContext();

export const TornsProvider = ({ children }) => {
    const {torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn} = useAxiosPeticions();

    return (
        <TornsContext.Provider value={{torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn}}>
            {children}
        </TornsContext.Provider>
    )
}

export const useTorns = () => useContext(TornsContext);