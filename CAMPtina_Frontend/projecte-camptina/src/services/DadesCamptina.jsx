import { createContext } from 'react'
import { useAxiosPeticionsApats } from './AxiosPeticionsApats'
import { useAxiosPeticionsMenus } from './AxiosPeticionsMenus'
import { useAxiosPeticionsMenusApats } from './AxiosPeticionsMenusApats.js'

export const DadesCamptinaContext = createContext()

export function DadesCamptinaProvider ({ children }) {

    const { apats, carregarApats, crearApat, actualitzarApat, eliminarApat } = useAxiosPeticionsApats()
    const { menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus } = useAxiosPeticionsMenus()
    const { menusApats, carregarMenusApats, crearMenusApats, eliminarMenuApats } = useAxiosPeticionsMenusApats()

    return (
        <DadesCamptinaContext.Provider value={{
            apats, carregarApats, crearApat, actualitzarApat, eliminarApat,
            menus, carregarMenus, crearMenus, actualitzarMenus, eliminarMenus,
            menusApats, carregarMenusApats, crearMenusApats, eliminarMenuApats
        }}
        >
            {children}
        </DadesCamptinaContext.Provider>
    )
}