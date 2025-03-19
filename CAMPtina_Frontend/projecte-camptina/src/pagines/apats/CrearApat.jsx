import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import { FormCrearApat } from './apats-seccio/FormCrearApat.jsx'
import { FormEliminarApat } from './apats-seccio/FormEliminarApat.jsx'
import { LlistaApats } from './apats-seccio/LlistaApats.jsx'
import clock from '../../assets/clock_old.mp4'

export default function CrearApat() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_clock' src={clock} autoPlay loop muted></video>
                </section>
                <FormCrearApat />
                <FormEliminarApat />
                <LlistaApats />
            </main>
            <Peu />
        </>
    )
}