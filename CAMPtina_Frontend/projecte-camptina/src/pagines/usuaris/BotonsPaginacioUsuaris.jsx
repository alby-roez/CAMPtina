import { BackPage, NextPage } from '../../Icones.jsx'
import './PaginacioUsuaris.css'

export const BotoUsuarisAnterior = ({ pA, sPA }) => {
    const fn_paginaUsuarisAnterior = () => {
        sPA(pA - 1)
    }

    const className_bttn_pagina_usuaris_anterior = 'cn-bttn-pagina-usuaris-anterior-enabled-paginacio-usuaris';
    const id_bttn_pagina_usuaris_anterior = 'id_bttn_pagina_usuaris_anterior_enabled_paginacio_usuaris';
    const name_bttn_pagina_usuaris_anterior = 'paginaUsuarisAnteriorEnabled';

    return (
        <button
            className={className_bttn_pagina_usuaris_anterior}
            id={id_bttn_pagina_usuaris_anterior}
            name={name_bttn_pagina_usuaris_anterior}
            onClick={fn_paginaUsuarisAnterior}
        >
            <BackPage />
        </button>
    )
}

export const BotoUsuarisAnteriorDisabled = ({ pA, sPA }) => {
    const fn_paginaUsuarisAnterior = () => {
        sPA(pA - 1)
    }

    const className_bttn_pagina_usuaris_anterior = 'cn-bttn-pagina-usuaris-anterior-disabled-paginacio-usuaris';
    const id_bttn_pagina_usuaris_anterior = 'id_bttn_pagina_usuaris_anterior_disabled_paginacio_usuaris';
    const name_bttn_pagina_usuaris_anterior = 'paginaUsuarisAnteriorDisabled';

    return (
        <button
            className={className_bttn_pagina_usuaris_anterior}
            id={id_bttn_pagina_usuaris_anterior}
            name={name_bttn_pagina_usuaris_anterior}
            onClick={fn_paginaUsuarisAnterior}
            disabled
        >
            <BackPage />
        </button>
    )
}

export const BotoUsuarisSeguent = ({ pA, sPA }) => {
    const fn_paginaUsuarisSeguent = () => {
        sPA(pA + 1)
    }

    const className_bttn_pagina_usuaris_seguent = 'cn-bttn-pagina-usuaris-seguent-enabled-paginacio-usuaris';
    const id_bttn_pagina_usuaris_seguent = 'id_bttn_pagina_usuaris_seguent_enabled_paginacio_usuaris';
    const name_bttn_pagina_usuaris_seguent = 'paginaUsuarisSeguentEnabled';

    return (
        <button
            className={className_bttn_pagina_usuaris_seguent}
            id={id_bttn_pagina_usuaris_seguent}
            name={name_bttn_pagina_usuaris_seguent}
            onClick={fn_paginaUsuarisSeguent}
        >
            <NextPage />
        </button>
    )
}

export const BotoUsuarisSeguentDisabled = ({ pA, sPA }) => {
    const fn_paginaUsuarisSeguent = () => {
        sPA(pA + 1)
    }

    const className_bttn_pagina_usuaris_seguent = 'cn-bttn-pagina-usuaris-seguent-disabled-paginacio-usuaris';
    const id_bttn_pagina_usuaris_seguent = 'id_bttn_pagina_usuaris_seguent_disabled_paginacio_usuaris';
    const name_bttn_pagina_usuaris_seguent = 'paginaUsuarisSeguentDisabled';

    return (
        <button
            className={className_bttn_pagina_usuaris_seguent}
            id={id_bttn_pagina_usuaris_seguent}
            name={name_bttn_pagina_usuaris_seguent}
            onClick={fn_paginaUsuarisSeguent}
            disabled
        >
            <NextPage />
        </button>
    )
}