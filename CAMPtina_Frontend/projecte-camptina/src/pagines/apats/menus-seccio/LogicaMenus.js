import { useContext } from 'react'
import { MenusContext } from './MenusContext'

export const useMenus = () => {
    const context = useContext(MenusContext)

    if (context === undefined) {
        throw new Error('UseMenus s\'ha d\'utilitzar amb un MenusProvider')
    }

    return context
}