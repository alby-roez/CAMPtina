import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
//import triar_apat from '../../assets/menjar.mp4'
import eat from '../../assets/eat.mp4'
import { SeccioTriarApat } from './triar-seccio/SeccioTriarApat.jsx'
import { useState } from 'react'
import { ReservaFeta } from './triar-seccio/ReservaFeta.jsx'

export default function TriarApat() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const [reservaState, setReservaState] = useState(true)

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_triar_apat' src={eat} autoPlay loop muted></video>
                </section>
                { reservaState
                    ? <ReservaFeta fn={setReservaState} state={reservaState} />
                    : <SeccioTriarApat /> }
            </main>
            <Peu />
        </>
    ) 
}