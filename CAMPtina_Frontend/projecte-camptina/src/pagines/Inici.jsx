import './css/Inici.css'
import { Navegacio } from '../header/Navegacio.jsx'
import { Peu } from '../footer/Peu.jsx'
import triarApat from '../assets/triar-apat.png'
import menjador from '../assets/menjador.mp4'
import { Link } from '../Link.jsx'

export default function Inici() {
    const className_main = 'cn-main-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className='cn-video-a-inici'>
                    <video id='id_menjador' src={menjador} autoPlay loop muted></video>
                    <Link to='/apats/triar-apat'>Triar Àpat</Link>
                </section>
                <section className='cn-info-inici'>
                    <h1>Pagina d'inici</h1>
                    <article className='cn-article-info-inici'>
                        <p>A la secció del vídeo tens un enllaç directe a la pàgina de reserva i elecció de l'àpat.</p>
                        <p>A la capçalera de dalt tens un navegador de pagines per interactuar amb la resta de pagines.</p>
                    </article>
                    <article className='cn-article-menu-inici'>
                        <h3>Recomanació del dia</h3>
                        <Link to='/apats/menus'><img className='cn-img-menus-inici' src={triarApat} alt='Imatge' /></Link>
                    </article>
                    <Link to='/blackmarket'>/blackmarket</Link>
                </section>
            </main>
            <Peu />
        </>
    )
    
}