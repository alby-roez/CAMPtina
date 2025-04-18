import { createContext } from 'react'
import { useAxiosPeticionsApats } from './AxiosPeticionsApats'
import { useAxiosPeticionsMenus } from './AxiosPeticionsMenus'
import { useAxiosPeticionsMenusApats } from './AxiosPeticionsMenusApats.js'
import { useAxiosPeticions } from './TornsPeticions.js'
import { useAxiosPeticionsRols } from './RolsPeticions.js'
import { useAxiosPeticionsUsuaris } from './UsuarisPeticions.js'

export const DadesCamptinaContext = createContext()

export function DadesCamptinaProvider({ children }) {

    const { apats, carregarApats, crearApat, actualitzarApat, eliminarApat } = useAxiosPeticionsApats()
    const { menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus } = useAxiosPeticionsMenus()
    const { menusApats, carregarMenusApats, crearMenusApats, eliminarMenuApats } = useAxiosPeticionsMenusApats()
    const { torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn } = useAxiosPeticions()
    const { rols, carregarRols } = useAxiosPeticionsRols()
    const { usuaris, carregarUsuaris, crearUsuari, actualitzarUsuari, eliminarUsuari } = useAxiosPeticionsUsuaris()

    return (
        <DadesCamptinaContext.Provider value={{
            apats, carregarApats, crearApat, actualitzarApat, eliminarApat,
            menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus,
            menusApats, carregarMenusApats, crearMenusApats, eliminarMenuApats,
            torns, carregarTorns, crearTorn, actualitzarTorn, eliminarTorn,
            rols, carregarRols,
            usuaris, carregarUsuaris, crearUsuari, actualitzarUsuari, eliminarUsuari
        }}
        >
            {children}
        </DadesCamptinaContext.Provider>
    )
}