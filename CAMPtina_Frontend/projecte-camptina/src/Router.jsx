import { useState, useEffect, Children } from 'react'
import { ESDEVENIMENTS } from './consts.js'
import { match } from 'path-to-regexp'

export function Router ({ children, rutes = [], componentPerDefecte: ComponentPerDefecte = () => null }) {
    const [camiActual, posarCamiActual] = useState(window.location.pathname)
    
    useEffect(() => {
        const canviarUbicacio = () => {
            posarCamiActual(window.location.pathname)
        }
        window.addEventListener(ESDEVENIMENTS.CAPENDAVANT, canviarUbicacio)
        window.addEventListener(ESDEVENIMENTS.CAPENRERE, canviarUbicacio)
        return () => {
            window.removeEventListener(ESDEVENIMENTS.CAPENDAVANT, canviarUbicacio)
            window.removeEventListener(ESDEVENIMENTS.CAPENRERE, canviarUbicacio)
        }
    }, [])

    let routeParams = {}

    // Add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'

        return isRoute ? props : null
    })

    const routesToUse = rutes.concat(routesFromChildren)

    const Pagina = routesToUse.find(({ cami }) => {
        if (cami === camiActual) return true
        
        // Hemos usado path-to-regexp
        // para poder detectar rutas dinámicas como por ejemplo
        // /search/:query <- :query es una ruta dinámica
        const matcherUrl = match(cami, { decode: decodeURIComponent })
        const matched = matcherUrl(camiActual)
        if (!matched) return false
        
        // Guardar los parámetros de la url que eran dinámicos
        // y que hemos extraído con path-to-regexp
        // por ejemplo, si la ruta és /search/:query
        // y la url és /search/javascript
        // matched.params.query === 'javascript'
        routeParams = matched.params
        return true
    })?.Component

    return Pagina
        ? <Pagina routeParams={routeParams} />
        : <ComponentPerDefecte routeParams={routeParams} />
}