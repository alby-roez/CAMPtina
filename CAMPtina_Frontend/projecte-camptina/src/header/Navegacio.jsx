import { useState, useEffect } from 'react'
import { Link } from '../Link.jsx'
import logo from '../assets/logo.png'
import usuari from '../assets/user.png'
//import menu from '../assets/menu.png'
import { ESDEVENIMENTS } from '../consts.js'
import { logoutUsuari } from '../services/AxiosPeticioLogin.js'

export const Navegacio = () => {

    const[dadesUsuari, setDadesUsuari] = useState(null)

    useEffect(() => {
        const dadesGuardades = localStorage.getItem('dadesUsuari')
        if(dadesGuardades) {
            try {
                const dades = JSON.parse(dadesGuardades)
                setDadesUsuari(dades)
            } catch(error) {
                localStorage.removeItem('dadesUsuari')
                localStorage.removeItem('jwtToken')
            }
        }

        const refrescar = () => {
            const dades = localStorage.getItem('dadesUsuari')
            if (dades) setDadesUsuari(JSON.parse(dades))
            else setDadesUsuari(null)
        }

        window.addEventListener(ESDEVENIMENTS.CAPENDAVANT, refrescar)
        return () => window.removeEventListener(ESDEVENIMENTS.CAPENDAVANT, refrescar)
    }, [])

    const esGestor = dadesUsuari?.rol === 'GESTOR';
    const esTreballador = dadesUsuari?.rol === 'TREBALLADOR';

    // Funció per tancar sessió
    const handleLogout = () => {
        //localStorage.removeItem('jwtToken')
        logoutUsuari()
        localStorage.removeItem('dadesUsuari')
        setDadesUsuari(null)
        window.history.pushState({}, '', '/login')
        window.dispatchEvent(new Event(ESDEVENIMENTS.CAPENDAVANT))
    }

    const className_header_navegacio = 'cn-header-navegacio';
    const className_section_nav_navegacio = 'cn-section-nav-navegacio';
    const className_section_usuari_navegacio = 'cn-section-usuari-navegacio';
    const className_article_usuari_ui_navegacio = 'cn-article-usuari-ui-navegacio';
    const className_article_usuari_imatge_navegacio = 'cn-article-usuari-imatge-navegacio';
    const className_img_logo = 'cn-img-logo';
    const className_img_usuari = 'cn-img-usuari';

    //const className_num_li_2 = 'cn-num-li-2-navegacio';
    //const className_num_li_3 = 'cn-num-li-3-navegacio';
    const className_num_li_5 = 'cn-num-li-5-navegacio';



    return (
        <>
            <header className={className_header_navegacio}>
                <section className={className_section_nav_navegacio}>
                    <Link to='/'><img className={className_img_logo} src={logo} alt="Logo" /></Link>
                    <nav>
                        <ul>
                            <li><Link to='/'>Inici</Link></li>
                            {esTreballador && (
                                <li><Link to='/apats/triar-apat'>Triar Apat</Link></li>
                            )}
                            

                            {esGestor && (
                                <>
                                    <li>
                                        <Link to=''>Àpats</Link>
                                        <ul className={className_num_li_5}>
                                            <li><Link to='/apats/menus'>Menús</Link></li>
                                            <li><Link to='/apats/triar-apat'>Triar Àpat</Link></li>
                                            <li><Link to='/apats/crear-apat'>Crear Àpat</Link></li>
                                            <li><Link to='/apats/gestio-reserves'>Reserves</Link></li>
                                            <li><Link to='/apats/torns'>Torns</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/usuaris/gestio-usuaris'>Usuaris</Link>
                                    </li>
                                </>
                            )}
                            <li><Link to='/contacte'>Contacte</Link></li>
                        </ul>
                    </nav>
                                 
                </section>
                <section 
                className={className_section_usuari_navegacio}
                style={{
                    justifyContent: dadesUsuari ? 'space-between' : 'flex-end'
                }}
                >
                {dadesUsuari ? (
                    <>
                        <article className={className_article_usuari_ui_navegacio}>
                            <h3>{(dadesUsuari?.nom || '') + ' ' + (dadesUsuari?.cognom1 || '')}</h3>
                            <h4>{dadesUsuari?.email || ''}</h4>
                        </article>
                        <article className={className_article_usuari_imatge_navegacio}>
                            <button
                                onClick={handleLogout}
                                style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: "white",
                                fontWeight: 'bold',
                                fontSize: '14px',
                                padding: '8px',
                                }}
                            >
                                Tancar sessió
                            </button>
                        </article>
                    </>
                ) : (
                    <Link to='/login'>
                        <img className={className_img_usuari} src={usuari} alt="Iniciar sessió" />
                    </Link>
                )}
                </section>
            </header>
        </>
    )
}