import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import triar_apat from '../../assets/menjar.mp4'
import { SeccioTriarApat } from './triar-seccio/SeccioTriarApat.jsx'

export default function TriarApat() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_triar_apat' src={triar_apat} autoPlay loop muted></video>
                </section>
                <SeccioTriarApat />
            </main>
            <Peu />
        </>
    ) 
}