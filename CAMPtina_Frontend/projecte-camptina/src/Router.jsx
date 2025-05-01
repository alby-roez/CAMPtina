import { useState, useEffect, Children, useContext } from 'react'
import { ESDEVENIMENTS } from './consts.js'
import { match } from 'path-to-regexp'
import { DadesCamptinaContext } from './services/DadesCamptina.jsx'
import Unauthorized from './pagines/Unauthorized.jsx'
import Login from './pagines/Login.jsx'

export function Router ({ children, rutes = [], componentPerDefecte: ComponentPerDefecte = () => null }) {
    const [camiActual, posarCamiActual] = useState(window.location.pathname)
    const { usuariActiu } = useContext(DadesCamptinaContext)
    
    useEffect(() => {
        const canviarUbicacio = () => posarCamiActual(window.location.pathname)
        window.addEventListener(ESDEVENIMENTS.CAPENDAVANT, canviarUbicacio)
        window.addEventListener(ESDEVENIMENTS.CAPENRERE, canviarUbicacio)
        return () => {
            window.removeEventListener(ESDEVENIMENTS.CAPENDAVANT, canviarUbicacio)
            window.removeEventListener(ESDEVENIMENTS.CAPENRERE, canviarUbicacio)
        }
    }, [])

    let routeParams = {}

    // Add routes from children <Route /> components
    const routesFromChildren = Children.map(children, (child) => {
        //const { name } = type
        //const isRoute = name === 'Route'
        if (child?.type?.isRoute) {
            return child.props;
        }
        return null;
        //return isRoute ? props : null
        //type.name === 'Route' ? props : null
    })

    //const routesToUse = rutes.concat(routesFromChildren)
    const routesToUse = [
        ...routesFromChildren.filter(route => route !== null),
        ...rutes
    ]

    const Pagina = routesToUse.find(({ cami }) => {
        if (cami === camiActual) return true
        
        // Hemos usado path-to-regexp
        // para poder detectar rutas dinámicas como por ejemplo
        // /search/:query <- :query es una ruta dinámica
        const matcherUrl = match(cami, { decode: decodeURIComponent })
        const matched = matcherUrl(camiActual)
        if (matched) {
            routeParams = matched.params
            return true
        }
        return false
        
        // Guardar los parámetros de la url que eran dinámicos
        // y que hemos extraído con path-to-regexp
        // por ejemplo, si la ruta és /search/:query
        // y la url és /search/javascript
        // matched.params.query === 'javascript'
        //routeParams = matched.params
        //return true
    })

    if (Pagina) {
        const { requiresAuth = false, allowedRoles, Component } = Pagina
    
        // === Guard 1: necessita autenticació? si no, show Login
        if (requiresAuth && !usuariActiu) {
          return <Login routeParams={routeParams} />
        }
    
        // === Guard 2: té rol suficient? si no, show Unauthorized
        if (requiresAuth && Array.isArray(allowedRoles) && !allowedRoles.includes(usuariActiu?.rol)) {
          return <Unauthorized routeParams={routeParams} />
        }
    
        // === Tot ok: renderitzem la pàgina
        return <Component routeParams={routeParams} />
      }
    
      // Si no hem trobat cap ruta, renderitzem el 404
      return <ComponentPerDefecte routeParams={routeParams} />
}