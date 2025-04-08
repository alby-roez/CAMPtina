import { BackPage, NextPage } from '../../../Icones.jsx'
import './PaginacioMenus.css'

export const BotoAnterior = ({ pA, sPA }) => {
    const fn_paginaAnterior = () => {
        sPA(pA - 1)
    }

    const className_bttn_pagina_anterior = 'cn-bttn-pagina-anterior-enabled-paginacio-menus';
    const id_bttn_pagina_anterior = 'id_bttn_pagina_anterior_enabled_paginacio_menus';
    const name_bttn_pagina_anterior = 'paginaAnteriorEnabled';

    return (
        <button
            className={className_bttn_pagina_anterior}
            id={id_bttn_pagina_anterior}
            name={name_bttn_pagina_anterior}
            onClick={fn_paginaAnterior}
        >
            <BackPage />
        </button>
    )
}

export const BotoAnteriorDisabled = ({ pA, sPA }) => {
    const fn_paginaAnterior = () => {
        sPA(pA - 1)
    }

    const className_bttn_pagina_anterior = 'cn-bttn-pagina-anterior-disabled-paginacio-menus';
    const id_bttn_pagina_anterior = 'id_bttn_pagina_anterior_disabled_paginacio_menus';
    const name_bttn_pagina_anterior = 'paginaAnteriorDisabled';

    return (
        <button
            className={className_bttn_pagina_anterior}
            id={id_bttn_pagina_anterior}
            name={name_bttn_pagina_anterior}
            onClick={fn_paginaAnterior}
            disabled
        >
            <BackPage />
        </button>
    )
}

export const BotoSeguent = ({ pA, sPA }) => {
    const fn_paginaSeguent = () => {
        sPA(pA + 1)
    }

    const className_bttn_pagina_seguent = 'cn-bttn-pagina-seguent-enabled-paginacio-menus';
    const id_bttn_pagina_seguent = 'id_bttn_pagina_seguent_enabled_paginacio_menus';
    const name_bttn_pagina_seguent = 'paginaSeguentEnabled';

    return (
        <button
            className={className_bttn_pagina_seguent}
            id={id_bttn_pagina_seguent}
            name={name_bttn_pagina_seguent}
            onClick={fn_paginaSeguent}
        >
            <NextPage />
        </button>
    )
}

export const BotoSeguentDisabled = ({ pA, sPA }) => {
    const fn_paginaSeguent = () => {
        sPA(pA + 1)
    }

    const className_bttn_pagina_seguent = 'cn-bttn-pagina-seguent-disabled-paginacio-menus';
    const id_bttn_pagina_seguent = 'id_bttn_pagina_seguent_disabled_paginacio_menus';
    const name_bttn_pagina_seguent = 'paginaSeguentDisabled';

    return (
        <button
            className={className_bttn_pagina_seguent}
            id={id_bttn_pagina_seguent}
            name={name_bttn_pagina_seguent}
            onClick={fn_paginaSeguent}
            disabled
        >
            <NextPage />
        </button>
    )
}