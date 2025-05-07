import { ESDEVENIMENTS } from './consts.js'

export function navegar(href) {
    window.history.pushState({}, '', href)
    const esdevenimentDeNavegacio = new Event(ESDEVENIMENTS.CAPENDAVANT)
    window.dispatchEvent(esdevenimentDeNavegacio)
}

export function Link({ target, to, ... props }) {
    const manejarClic = (e) => {
        const esEsdevenimentPrincipal = e.button === 0
        const esEsdevenimentModificat = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
        const esEsdevenimentManejable = target === undefined || target === '_self'
        if (esEsdevenimentPrincipal && esEsdevenimentManejable && !esEsdevenimentModificat) {
            e.preventDefault()
            navegar(to)
            window.scrollTo(0, 0)
        }
    }

    return <a onClick={manejarClic} href={to} target={target} {... props} />
}