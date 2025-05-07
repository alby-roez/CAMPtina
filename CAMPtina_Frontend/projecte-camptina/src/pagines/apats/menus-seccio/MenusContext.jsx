import { useState, createContext } from 'react'

export const MenusContext = createContext()

export function MenusProvider ({ children }) {

    /**
     * @author Albert
     * @description Estat per guardar la llista de primer
     */
    const [menuPrimer, setMenuPrimer] = useState([])

    /**
     * @author Albert
     * @description Estat per guardar la llista de segon
     */
    const [menuSegon, setMenuSegon] = useState([])

    /**
     * @author Albert
     * @description Estat per guardar la llista de postres
     */
    const [menuPostres, setMenuPostres] = useState([])

    const addMenuPrimer = apat => {
        const apatsEnMenuIndex = menuPrimer.findIndex(item => item.id === apat.id)
        if (apatsEnMenuIndex >= 0) {
            const nouMenu = structuredClone(menuPrimer)
            nouMenu[apatsEnMenuIndex].afegit = true
            return setMenuPrimer(nouMenu)
        }
        setMenuPrimer(estatAnterior => ([
            ... estatAnterior,
            {
                ... apat,
                afegit: true
            }
        ]))
    }

    const addMenuSegon = apat => {
        const apatsEnMenuIndex = menuSegon.findIndex(item => item.id === apat.id)
        if (apatsEnMenuIndex >= 0) {
            const nouMenu = structuredClone(menuSegon)
            nouMenu[apatsEnMenuIndex].afegit = true
            return setMenuSegon(nouMenu)
        }
        setMenuSegon(estatAnterior => ([
            ... estatAnterior,
            {
                ... apat,
                afegit: true
            }
        ]))
    }

    const addMenuPostres = apat => {
        const apatsEnMenuIndex = menuPostres.findIndex(item => item.id === apat.id)
        if (apatsEnMenuIndex >= 0) {
            const nouMenu = structuredClone(menuPostres)
            nouMenu[apatsEnMenuIndex].afegit = true
            return setMenuPostres(nouMenu)
        }
        setMenuPostres(estatAnterior => ([
            ... estatAnterior,
            {
                ... apat,
                afegit: true
            }
        ]))
    }

    const removeMenuPrimer = apat => {
        setMenuPrimer(estatAnterior => estatAnterior.filter(item => item.id !== apat.id))
    }

    const removeMenuSegon = apat => {
        setMenuSegon(estatAnterior => estatAnterior.filter(item => item.id !== apat.id))
    }

    const removeMenuPostres = apat => {
        setMenuPostres(estatAnterior => estatAnterior.filter(item => item.id !== apat.id))
    }

    const clearMenuPrimer = () => {
        setMenuPrimer([])
    }

    const clearMenuSegon = () => {
        setMenuSegon([])
    }

    const clearMenuPostres = () => {
        setMenuPostres([])
    }

    return (
        <MenusContext.Provider value={{
            menuPrimer, setMenuPrimer, addMenuPrimer, clearMenuPrimer, removeMenuPrimer,
            menuSegon, setMenuSegon, addMenuSegon, clearMenuSegon, removeMenuSegon,
            menuPostres, setMenuPostres, addMenuPostres, clearMenuPostres, removeMenuPostres
        }}
        >
            {children}
        </MenusContext.Provider>
    )
}