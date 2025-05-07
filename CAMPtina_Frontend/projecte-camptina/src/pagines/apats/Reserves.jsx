import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import  GestioReserves  from './gestio-reserves/GestioReserves.jsx'
import reserva from '../../assets/reserva.mp4'

export default function Reserves() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_clock' src={reserva} autoPlay loop muted></video>
                </section>
                <GestioReserves />
            </main>
            <Peu />
        </>
    )
}