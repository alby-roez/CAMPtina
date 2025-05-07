import { BotoApatsAnterior, BotoApatsAnteriorDisabled, BotoApatsSeguent, BotoApatsSeguentDisabled } from './BotonsPaginacioApats.jsx'
import './PaginacioApats.css'

export const PaginacioApats = ({ totalApats, apatsPerPagina, paginaActual, setPaginaActual }) => {

    const numerosDePagina = [];

    for (let i = 1; i <= Math.ceil(totalApats/apatsPerPagina); i++) {
        numerosDePagina.push(i)
    }

    const paginaDrecera = num => {
        setPaginaActual(num)
    }

    const className_article_pagines = 'cn-article-pagines-paginacio-apats';
    const id_article_pagines = 'id_article_pagines_paginacio_apats';

    const className_span_pagines = 'cn-span-pagines-paginacio-apats';

    return (
        <article className={className_article_pagines} id={id_article_pagines}>
            {paginaActual === 1
                ? <BotoApatsAnteriorDisabled pA={paginaActual} sPA={setPaginaActual} />
                : <BotoApatsAnterior pA={paginaActual} sPA={setPaginaActual} />
            }
            <span className={className_span_pagines}>
                {numerosDePagina.map((item) => (
                    <button
                        key={item}
                        className={`${
                            item === paginaActual ? 'cn-actiu-span-bttn-paginacio-apats' : 'cn-desactiu-span-bttn-paginacio-apats'
                        }`}
                        id={`id_${item}_span_bttn_paginacio_apats`}
                        name={'numeroPagina'}
                        onClick={() => paginaDrecera(item)}
                    >
                        {item}
                    </button>
                ))}
            </span>
            {paginaActual >= numerosDePagina.length
                ? <BotoApatsSeguentDisabled pA={paginaActual} sPA={setPaginaActual} />
                : <BotoApatsSeguent pA={paginaActual} sPA={setPaginaActual} />
            }
        </article>
    )
}