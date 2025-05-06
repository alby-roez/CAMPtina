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

    const routesFromChildren = Children.map(children, (child) => {
        if (child?.type?.isRoute) {
            return child.props;
        }
        return null;
    })

    const routesToUse = [
        ...routesFromChildren.filter(route => route !== null),
        ...rutes
    ]

    const Pagina = routesToUse.find(({ cami }) => {
        if (cami === camiActual) return true
        
        const matcherUrl = match(cami, { decode: decodeURIComponent })
        const matched = matcherUrl(camiActual)
        if (matched) {
            routeParams = matched.params
            return true
        }
        return false
    })

    if (Pagina) {
        const { requiresAuth = false, allowedRoles, Component } = Pagina

        /**
         * @description Guard 1: necessita autenticació? si no, show Login
         */
        if (requiresAuth && !usuariActiu) {
            return <Login routeParams={routeParams} />
        }

        /**
         * @description Guard 2: té rol suficient? si no, show Unauthorized
         */
        if (requiresAuth && Array.isArray(allowedRoles) && !allowedRoles.includes(usuariActiu?.rol)) {
          return <Unauthorized routeParams={routeParams} />
        }

        return <Component routeParams={routeParams} />
      }
      
      return <ComponentPerDefecte routeParams={routeParams} />
}