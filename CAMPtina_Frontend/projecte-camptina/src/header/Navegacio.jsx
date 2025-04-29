import { useState } from 'react'
import { Link } from '../Link.jsx'
import logo from '../assets/logo.png'
import usuari from '../assets/user.png'
//import menu from '../assets/menu.png'
import { ESDEVENIMENTS } from '../consts.js'

export const Navegacio = () => {

    const[dadesUsuari, setDadesUsuari] = useState(() => {
        const usuariGuardat = localStorage.getItem('usuari')
        return usuariGuardat ? JSON.parse(usuariGuardat) : null
    })

    const esGestor = dadesUsuari?.rol === 1;
    const esTreballador = dadesUsuari?.rol === 2;

    // Funció per tancar sessió
    const handleLogout = () => {
        localStorage.removeItem('usuari')
        setDadesUsuari(null);
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
    const className_num_li_4 = 'cn-num-li-4-navegacio';

    const txt_NOM_COMPLET = 'Albert Rodríguez';
    const txt_USUARI = 'albyroez';

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
                                        <Link to='/apats'>Àpats</Link>
                                        <ul className={className_num_li_4}>
                                            <li><Link to='/apats/menus'>Menús</Link></li>
                                            <li><Link to='/apats/triar-apat'>Triar Àpat</Link></li>
                                            <li><Link to='/apats/crear-apat'>Crear Àpat</Link></li>
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