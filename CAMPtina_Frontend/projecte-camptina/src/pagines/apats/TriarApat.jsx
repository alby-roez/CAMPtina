import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import { SeccioTriarApat } from './triar-seccio/SeccioTriarApat.jsx'
import { useState, useEffect, useContext } from 'react'
import { ReservaFeta } from './triar-seccio/ReservaFeta.jsx'
import { DadesCamptinaContext } from '../../services/DadesCamptina.jsx'

export default function TriarApat() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const [reservaState, setReservaState] = useState(false)
    const [reserva, setReserva] = useState(null)
    const { usuariActiu, obtenirReservaUsuari, eliminarReserva } = useContext(DadesCamptinaContext)

    useEffect(() => {
        let actiu = true;
        console.log("Es actiu:", actiu)
        console.log("Usuari actiu (referència):", usuariActiu);
        const carregarReserva = async () => {
            try {
                const resposta = await obtenirReservaUsuari(usuariActiu.id)
                
                console.log('Reserva despres de fer la crida: ', resposta)
                console.log(resposta)
                if (actiu) {
                    if (resposta) {
                        setReserva(resposta)
                        setReservaState(true)
                    } else {
                        setReserva(null)
                        setReservaState(false)
                    }
                }
            } catch (error) {
                if (actiu) {
                    console.error("Error obtenint la reserva:", error)
                    setReserva(null)
                    setReservaState(false)
                }

            }
        }
        if (usuariActiu?.id) {
            carregarReserva()
        }
        return () => {
            actiu = false;
        }
    }, [usuariActiu?.id])

    useEffect(() => {
        if (!reserva) {
            setReservaState(false);
        } else {
            setReservaState(true)
        }
    }, [reserva]);
    console.log("reservaState:", reservaState);
    console.log("reserva:", reserva);
    console.log("Render TriarApat");
    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id="id_video_menus_carta" src="/src/assets/menus_carta.mp4" autoPlay loop muted></video>
                </section>
                {reserva
                    ? <ReservaFeta
                        fn={() => setReserva(null)} // Quan s'elimina la reserva
                        reserva={reserva}
                        eliminarReserva={eliminarReserva}
                    />
                    : <SeccioTriarApat fn={setReserva} />}
            </main>
            <Peu />
        </>
    )
}