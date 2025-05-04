import './css/Inici.css'
import { Navegacio } from '../header/Navegacio.jsx'
import { Peu } from '../footer/Peu.jsx'
import triarApat from '../assets/triar-apat.png'
import menjador from '../assets/menjador.mp4'
import { Link } from '../Link.jsx'
import { useState, useEffect } from 'react'
import { ESDEVENIMENTS } from '../consts.js'

export default function Inici() {
    const className_main = 'cn-main-navegacio';

    // 1) Funció per recuperar l'usuari del JWT
    const getDadesUsuari = () => {
        const usuariGuardat = localStorage.getItem('dadesUsuari')
        if(!usuariGuardat) return null
        
        try {
            return JSON.parse(usuariGuardat)
        } catch(error) {
            localStorage.removeItem('dadesUsuari')
            return null
        }
    }

    // 2) Estat local i efecte per actualitzar en esdeveniments
    const [dadesUsuari, setDadesUsuari] = useState(getDadesUsuari())

    useEffect(() => {
        const handler = () => {
            setDadesUsuari(getDadesUsuari())
        }
        window.addEventListener(ESDEVENIMENTS.CAPENDAVANT, handler)
        return () => {
            window.removeEventListener(ESDEVENIMENTS.CAPENDAVANT, handler)
        }
    }, [])
    
    const esGestor = dadesUsuari?.rol === 'GESTOR'
    const esTreballador = dadesUsuari?.rol === 'TREBALLADOR'

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className='cn-video-a-inici'>
                    <video id='id_menjador' src={menjador} autoPlay loop muted></video>

                    {esTreballador && (
                        <Link to='/apats/triar-apat'>Fer una comanda</Link>
                    )}

                    {esGestor && (
                    <>
                        <Link to='/apats/triar-apat'>Fer una comanda</Link>
                        <Link to='/apats/crear-apat'>Gestió d'àpats</Link>
                        <Link to='/apats/menus'>Gestió menus</Link>
                        <Link to='/apats/gestio-reserves'>Gestió reserves</Link>
                        <Link to='/usuaris/gestio-usuaris'>Gestió d'usuaris</Link>
                    </>       
                    )}    

                </section>
                
            </main>
            <Peu />
        </>
    )
    
}