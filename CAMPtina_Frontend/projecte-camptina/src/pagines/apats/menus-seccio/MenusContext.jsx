import { useState, useEffect, createContext } from 'react'
import { useAxiosPeticionsMenusApats } from '../../../services/AxiosPeticionsMenusApats.js'
import { useAxiosPeticionsApats } from '../../../services/AxiosPeticionsApats.js'

export const MenusContext = createContext()

export function MenusProvider ({ children }) {
    
    const { apats, carregarApats } = useAxiosPeticionsApats()
    const { menusApats, carregarMenusApats } = useAxiosPeticionsMenusApats()

    /*let getLlista_1 = [];
    let getLlista_2 = [];
    let getLlista_3 = [];

    const llista = () => {
        console.log(menusApats)
        menusApats.map((item) => {
            if (item.apatId === 1) {
                getLlista_1.push(item)
            } else if (item.categoriaId === 2) {
                getLlista_2.push(item)
            } else if (item.categoriaId === 3) {
                getLlista_3.push(item)
            } else {
                //
            }
        })
    }*/

    useEffect(() => {
        //setMenuSegon([{id: 66, nom: 'Anton', categoriaId: 2, descripcio: 'Ruso'}])
        console.log(apats, 'Menus Context')
    }, [])

    const obj = {id: 33, nom: 'Pepe', categoriaId: 1, descripcio: 'Josep'}

    /**
     * @author Albert
     * @description Estat per guardar la llista de primer
     */
    const [menuPrimer, setMenuPrimer] = useState([obj])

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

        console.log(apat)
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

        console.log(apat)
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

        console.log(apat)
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