import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import { FormCrearUsuari } from './FormCrearUsuari.jsx'
import { LlistaUsuaris } from './LlistaUsuaris.jsx'
import usuaris from '../../assets/usuaris.mp4'

export default function GestioUsuaris() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_usuaris' src={usuaris} autoPlay loop muted></video>
                </section>
                <FormCrearUsuari />
                <LlistaUsuaris />
            </main>
            <Peu />
        </>
    )
}