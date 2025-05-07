import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import torn from '../../assets/torn.mp4'
import { FormCrearTorn } from './torns-seccio/FormCrearTorn.jsx';
import { LlistaTorns } from './torns-seccio/LlistaTorns.jsx';

export default function Torns() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_clock' src={torn} autoPlay loop muted></video>
                </section>
                <FormCrearTorn />
                <LlistaTorns />
            </main>
            <Peu />
        </>
    )
}