import { createContext } from 'react'
import { useAxiosPeticionsApats } from './AxiosPeticionsApats'
import { useAxiosPeticionsMenus } from './AxiosPeticionsMenus'
import { useAxiosPeticionsMenusApats } from './AxiosPeticionsMenusApats.js'
import { useAxiosPeticionsTorns } from './AxiosPeticionsTorns.js'
import { useAxiosPeticionsRols } from './AxiosPeticionsRols.js'
import { useAxiosPeticionsUsuaris } from './AxiosPeticionsUsuaris.js'
import { useAxiosPeticionsCategories } from './AxiosPeticionsCategories.js'

export const DadesCamptinaContext = createContext()

export function DadesCamptinaProvider({ children }) {

    const { apats, carregarApats, crearApat, actualitzarApat, eliminarApat } = useAxiosPeticionsApats()
    const { menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus } = useAxiosPeticionsMenus()
    const { menusApats, carregarMenusApats, carregarMenusComplet, crearMenusApats, eliminarMenuApats } = useAxiosPeticionsMenusApats()
    const { torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn } = useAxiosPeticionsTorns()
    const { rols, carregarRols } = useAxiosPeticionsRols()
    const { usuaris, carregarUsuaris, crearUsuari, actualitzarUsuari, eliminarUsuari } = useAxiosPeticionsUsuaris()
    const { categories, carregarCategories } = useAxiosPeticionsCategories()

    return (
        <DadesCamptinaContext.Provider value={{
            apats, carregarApats, crearApat, actualitzarApat, eliminarApat,
            menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus,
            menusApats, carregarMenusApats, carregarMenusComplet, crearMenusApats, eliminarMenuApats,
            torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn,
            rols, carregarRols,
            usuaris, carregarUsuaris, crearUsuari, actualitzarUsuari, eliminarUsuari,
            categories, carregarCategories
        }}
        >
            {children}
        </DadesCamptinaContext.Provider>
    )
}