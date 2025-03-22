import { Navegacio } from '../header/Navegacio.jsx'
import { Peu } from '../footer/Peu.jsx'
//import { Link } from '../Link.jsx';
//import team from '../assets/team.png'
import camptina from '../assets/camptina.mp4'
import menjador from '../assets/menjador.mp4'

export default function Inici() {
    const className_main = 'cn-main-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className='cn-video-select-inici'>
                    <video id='id_menjador' src={menjador} autoPlay loop muted></video>
                    <article>
                        PRUEBA
                    </article>
                    <select className='cn-select-inici' name='nameSI'>
                        <option></option>
                        <option>Hola</option>
                    </select>
                    <select className='cn-select-inici' name='nameSI'>
                        <option></option>
                        <option>Adeu</option>
                    </select>
                    <select className='cn-select-inici' name='nameSI'>
                        <option></option>
                        <option>Si</option>
                    </select>
                    <select className='cn-select-inici' name='nameSI'>
                        <option></option>
                        <option>No</option>
                    </select>
                </section>
                <video id='id_camptina' src={camptina} autoPlay loop muted></video>
                <h1>Inici</h1>
            </main>
            <Peu />
        </>
    )
    
}