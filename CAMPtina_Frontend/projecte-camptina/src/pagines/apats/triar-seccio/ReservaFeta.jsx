import './ReservaFeta.css'
import { useState, useContext, useEffect } from 'react'
import { DeletePaperera, ExpandirIcona, ReduirIcona, UpdateLlapis, AddMenu } from '../../../Icones.jsx'

import { DadesCamptinaContext } from "../../../services/DadesCamptina.jsx";


const ApatsExpandir = () => {
    const { reservaIdUsuari, obtenirReservaUsuari } = useContext(DadesCamptinaContext)

    useEffect(() => {
        const idUsuari = JSON.parse(localStorage.getItem("dadesUsuari"))?.id
        if (idUsuari) {
            obtenirReservaUsuari(idUsuari)
        }
    }, [])

    if (!reservaIdUsuari) {
        return <p>No tens cap reserva feta.</p>;
    }

    return (
        <div className='cn-div-apats-expandir-reduir-reserva-feta'>
            <div className='cn-div-apats-expandir-reserva-feta'>
                <div className='cn-container-h3-h4-reserva-feta'>
                    <div className='cn-a-container-e-reserva-feta'>
                        <h3>{'PRIMER:'}</h3>
                    </div>
                    <div className='cn-apat-container-e-reserva-feta'>
                        <h4>{reservaIdUsuari.nomPrimer || ''}</h4>
                    </div>
                </div>
                {/*<div className='cn-apat-container-descripcio-e-reserva-feta'>
                    <p>{'APAT 1 es una descripció'}</p>
                </div>*/}
            </div>
            <div className='cn-div-apats-expandir-reserva-feta'>
                <div className='cn-container-h3-h4-reserva-feta'>
                    <div className='cn-a-container-e-reserva-feta'>
                        <h3>{'SEGON:'}</h3>
                    </div>
                    <div className='cn-apat-container-e-reserva-feta'>
                        <h4>{reservaIdUsuari.nomSegon || ''}</h4>
                    </div>
                </div>
                {/*<div className='cn-apat-container-descripcio-e-reserva-feta'>
                    <p>{'APAT 2 es una descripcióAPAT 2 es una descripcióAPAT 2 es una descripcióAPAT 2 es una descripcióAPAT 2 es una descripció'}</p>
                </div>*/}
            </div>
            <div className='cn-div-apats-expandir-reserva-feta'>
                <div className='cn-container-h3-h4-reserva-feta'>
                    <div className='cn-a-container-e-reserva-feta'>
                        <h3>{'POSTRES:'}</h3>
                    </div>
                    <div className='cn-apat-container-e-reserva-feta'>
                        <h4>{reservaIdUsuari.nomPostre || ''}</h4>
                    </div>
                </div>
                {/*<div className='cn-apat-container-descripcio-e-reserva-feta'>
                    <p>{'APAT 3 es una descripció'}</p>
                </div>*/}
            </div>
        </div>
    )
}

const ApatsReduir = () => {

    const { reservaIdUsuari, obtenirReservaUsuari } = useContext(DadesCamptinaContext)

    useEffect(() => {
        const idUsuari = JSON.parse(localStorage.getItem("dadesUsuari"))?.id
        if (idUsuari) {
            obtenirReservaUsuari(idUsuari)
        }
    }, [])

    if (!reservaIdUsuari) {
        return <p>No tens cap reserva feta.</p>;
    }

    return (
        <div className='cn-div-apats-expandir-reduir-reserva-feta'>
            <h4>{reservaIdUsuari?.nomPrimer || ''}</h4>
            <h4>{reservaIdUsuari?.nomSegon || ''}</h4>
            <h4>{reservaIdUsuari?.nomPostre || ''}</h4>
        </div>
    )
}

export const ReservaFeta = ({ fn, state }) => {

    const { reservaIdUsuari, obtenirReservaUsuari, eliminarReserva } = useContext(DadesCamptinaContext)

    useEffect(() => {
        const idUsuari = JSON.parse(localStorage.getItem("dadesUsuari"))?.id
        if (idUsuari) {
            obtenirReservaUsuari(idUsuari)
        }
    }, [])

    const maneigState = async () => {
        fn(!state)
        try {
            const idUsuari = JSON.parse(localStorage.getItem("dadesUsuari"))?.id
            console.log(idUsuari)
            if (reservaIdUsuari?.idReserva) {
                await eliminarReserva(reservaIdUsuari.idReserva)

                // Actualització post-eliminació
                await obtenirReservaUsuari(idUsuari)
                // Opcional: Reset de l'estat local si cal
                setReservaIdUsuari(null)
            }
        } catch (error) {
            console.error("Error eliminant reserva:", error)
        }
    }

    const [cambi, setCambi] = useState(true)

    const fn_cambiar = () => {
        setCambi(!cambi)
    }

    return (
        <section className='cn-section-reserva-feta'>
            <article className='cn-article-titol-torn-reserva-feta'>
                <h2>{reservaIdUsuari?.nomTorn || ''}</h2>
            </article>
            <article className='cn-article-contingut-reserva-feta'>
                <div className='cn-div-actualitzar-eliminar-reserva-feta'>
                    <button
                        className='cn-bttn-actualitzar-eliminar-reserva-feta'
                        name='nameBttnActualitzarReservaFeta'
                        onClick={maneigState}
                    >
                        <AddMenu />
                    </button>
                </div>
                <div className='cn-div-apats-e-r-reserva-feta'>
                    <div className='cn-div-container-titol-apats-reserva-feta'>
                        <h3>{'APATS ESCOLLITS'}</h3>
                        {cambi
                            ? <button className='cn-bttn-cambiar-tamany-reserva-feta' name='nameBttnExpandir' onClick={fn_cambiar}>
                                <ExpandirIcona />
                            </button>
                            : <button className='cn-bttn-cambiar-tamany-reserva-feta' name='nameBttnExpandir' onClick={fn_cambiar}>
                                <ReduirIcona />
                            </button>}
                    </div>
                    {cambi
                        ? <ApatsReduir />
                        : <ApatsExpandir />}
                </div>
        
                <div className='cn-div-actualitzar-eliminar-reserva-feta'>
                    <button
                        className='cn-bttn-actualitzar-eliminar-reserva-feta'
                        name='nameBttnEliminarReservaFeta'
                        onClick={async () => {
                            try {
                                const idUsuari = JSON.parse(localStorage.getItem("dadesUsuari"))?.id
                                console.log(idUsuari)
                                if (reservaIdUsuari?.idReserva) {
                                    await eliminarReserva(reservaIdUsuari.idReserva)

                                    // Actualització post-eliminació
                                    await obtenirReservaUsuari(idUsuari)
                                    // Opcional: Reset de l'estat local si cal
                                    setReservaIdUsuari(null)
                                }
                            } catch (error) {
                                console.error("Error eliminant reserva:", error)
                            }
                        }}
                    >
                        <DeletePaperera />
                    </button>
                </div>
            </article>
        </section>
    )
}
