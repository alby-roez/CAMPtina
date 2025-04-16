import { BackPage, NextPage } from '../../../Icones.jsx'
import './PaginacioApats.css'

export const BotoApatsAnterior = ({ pA, sPA }) => {
    const fn_paginaApatsAnterior = () => {
        sPA(pA - 1)
    }

    const className_bttn_pagina_apats_anterior = 'cn-bttn-pagina-apats-anterior-enabled-paginacio-apats';
    const id_bttn_pagina_apats_anterior = 'id_bttn_pagina_apats_anterior_enabled_paginacio_apats';
    const name_bttn_pagina_apats_anterior = 'paginaApatsAnteriorEnabled';

    return (
        <button
            className={className_bttn_pagina_apats_anterior}
            id={id_bttn_pagina_apats_anterior}
            name={name_bttn_pagina_apats_anterior}
            onClick={fn_paginaApatsAnterior}
        >
            <BackPage />
        </button>
    )
}

export const BotoApatsAnteriorDisabled = ({ pA, sPA }) => {
    const fn_paginaApatsAnterior = () => {
        sPA(pA - 1)
    }

    const className_bttn_pagina_apats_anterior = 'cn-bttn-pagina-apats-anterior-disabled-paginacio-apats';
    const id_bttn_pagina_apats_anterior = 'id_bttn_pagina_apats_anterior_disabled_paginacio_apats';
    const name_bttn_pagina_apats_anterior = 'paginaApatsAnteriorDisabled';

    return (
        <button
            className={className_bttn_pagina_apats_anterior}
            id={id_bttn_pagina_apats_anterior}
            name={name_bttn_pagina_apats_anterior}
            onClick={fn_paginaApatsAnterior}
            disabled
        >
            <BackPage />
        </button>
    )
}

export const BotoApatsSeguent = ({ pA, sPA }) => {
    const fn_paginaApatsSeguent = () => {
        sPA(pA + 1)
    }

    const className_bttn_pagina_apats_seguent = 'cn-bttn-pagina-apats-seguent-enabled-paginacio-apats';
    const id_bttn_pagina_apats_seguent = 'id_bttn_pagina_apats_seguent_enabled_paginacio_apats';
    const name_bttn_pagina_apats_seguent = 'paginaApatsSeguentEnabled';

    return (
        <button
            className={className_bttn_pagina_apats_seguent}
            id={id_bttn_pagina_apats_seguent}
            name={name_bttn_pagina_apats_seguent}
            onClick={fn_paginaApatsSeguent}
        >
            <NextPage />
        </button>
    )
}

export const BotoApatsSeguentDisabled = ({ pA, sPA }) => {
    const fn_paginaApatsSeguent = () => {
        sPA(pA + 1)
    }

    const className_bttn_pagina_apats_seguent = 'cn-bttn-pagina-apats-seguent-disabled-paginacio-apats';
    const id_bttn_pagina_apats_seguent = 'id_bttn_pagina_apats_seguent_disabled_paginacio_apats';
    const name_bttn_pagina_apats_seguent = 'paginaApatsSeguentDisabled';

    return (
        <button
            className={className_bttn_pagina_apats_seguent}
            id={id_bttn_pagina_apats_seguent}
            name={name_bttn_pagina_apats_seguent}
            onClick={fn_paginaApatsSeguent}
            disabled
        >
            <NextPage />
        </button>
    )
}