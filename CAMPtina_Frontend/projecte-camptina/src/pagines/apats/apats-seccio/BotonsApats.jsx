import { UpdateLlapis } from '../../../Icones.jsx'
import './LlistaApats.css'

export const BotoUpdate = ({ id, actualitzarLlapis }) => {
    const fn_actualitzar = () => {
        actualitzarLlapis(id)
    }

    const className_bttn_update = 'cn-bttn-update-llista-apats';
    const id_bttn_update = `id_${id}_bttn_update_llista_apats`;
    const name_bttn_update = 'updateDeLlistaApats';

    return (
        <button
            className={className_bttn_update}
            id={id_bttn_update}
            name={name_bttn_update}
            onClick={fn_actualitzar}
        >
            <UpdateLlapis />
        </button>
    )
}

export const BotoUpdateDisabled = () => {

    const className_bttn_update = 'cn-bttn-update-llista-apats';
    const name_bttn_update = 'updateDeLlistaApats';

    return (
        <button
            className={className_bttn_update}
            name={name_bttn_update}
            disabled
        >
            <UpdateLlapis />
        </button>
    )
}