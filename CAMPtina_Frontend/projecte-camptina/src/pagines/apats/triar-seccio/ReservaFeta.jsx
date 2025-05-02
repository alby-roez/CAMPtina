import './ReservaFeta.css'
import { useState } from 'react'
import { DeletePaperera, ExpandirIcona, ReduirIcona, UpdateLlapis } from '../../../Icones.jsx'

const ApatsExpandir = () => {
    return (
        <div className='cn-div-apats-expandir-reduir-reserva-feta'>
            <div className='cn-div-apats-expandir-reserva-feta'>
                <div className='cn-container-h3-h4-reserva-feta'>
                    <div className='cn-a-container-e-reserva-feta'>
                        <h3>{'PRIMER:'}</h3>
                    </div>
                    <div className='cn-apat-container-e-reserva-feta'>
                        <h4>{'APAT 1'}</h4>
                    </div>
                </div>
                <div className='cn-apat-container-descripcio-e-reserva-feta'>
                    <p>{'APAT 1 es una descripció'}</p>
                </div>
            </div>
            <div className='cn-div-apats-expandir-reserva-feta'>
                <div className='cn-container-h3-h4-reserva-feta'>
                    <div className='cn-a-container-e-reserva-feta'>
                        <h3>{'SEGON:'}</h3>
                    </div>
                    <div className='cn-apat-container-e-reserva-feta'>
                        <h4>{'APAT 2'}</h4>
                    </div>
                </div>
                <div className='cn-apat-container-descripcio-e-reserva-feta'>
                    <p>{'APAT 2 es una descripcióAPAT 2 es una descripcióAPAT 2 es una descripcióAPAT 2 es una descripcióAPAT 2 es una descripció'}</p>
                </div>
            </div>
            <div className='cn-div-apats-expandir-reserva-feta'>
                <div className='cn-container-h3-h4-reserva-feta'>
                    <div className='cn-a-container-e-reserva-feta'>
                        <h3>{'POSTRES:'}</h3>
                    </div>
                    <div className='cn-apat-container-e-reserva-feta'>
                        <h4>{'APAT 3'}</h4>
                    </div>
                </div>
                <div className='cn-apat-container-descripcio-e-reserva-feta'>
                    <p>{'APAT 3 es una descripció'}</p>
                </div>
            </div>
        </div>
    )
}

const ApatsReduir = () => {
    return (
        <div className='cn-div-apats-expandir-reduir-reserva-feta'>
            <h4>{'Primer'}</h4>
            <h4>{'Segon'}</h4>
            <h4>{'Postre'}</h4>
        </div>
    )
}

export const ReservaFeta = ({ fn, state }) => {

    const { torns, crearReserva } = useContext(DadesCamptinaContext);
    const { menuPrimer, menuSegon, menuPostres} = useMenus()

    const maneigState = () => {
        fn(!state)
    }

    const [cambi, setCambi] = useState(true)

    const fn_cambiar = () => {
        setCambi(!cambi)
    }

    return (
        <section className='cn-section-reserva-feta'>
            <article className='cn-article-titol-torn-reserva-feta'>
                <h2>{'1 - 5 - 25 ----- 23:00'}</h2>
            </article>
            <article className='cn-article-contingut-reserva-feta'>
                <div className='cn-div-actualitzar-eliminar-reserva-feta'>
                    <button
                        className='cn-bttn-actualitzar-eliminar-reserva-feta'
                        name='nameBttnActualitzarReservaFeta'
                        onClick={maneigState}
                    >
                        <UpdateLlapis />
                    </button>
                </div>
                <div className='cn-div-apats-e-r-reserva-feta'>
                    <div className='cn-div-container-titol-apats-reserva-feta'>
                        <h3>{'APATS ESCOLLITS'}</h3>
                        { cambi
                        ? <button className='cn-bttn-cambiar-tamany-reserva-feta' name='nameBttnExpandir' onClick={fn_cambiar}>
                            <ExpandirIcona />
                            </button>
                        : <button className='cn-bttn-cambiar-tamany-reserva-feta' name='nameBttnExpandir' onClick={fn_cambiar}>
                            <ReduirIcona />
                            </button> }
                    </div>
                    { cambi
                    ? <ApatsReduir />
                    : <ApatsExpandir /> }
                </div>
                <div className='cn-div-actualitzar-eliminar-reserva-feta'>
                    <button
                        className='cn-bttn-actualitzar-eliminar-reserva-feta'
                        name='nameBttnEliminarReservaFeta'
                        onClick={''}
                    >
                        <DeletePaperera />
                    </button>
                </div>
            </article>
        </section>
    )
}
