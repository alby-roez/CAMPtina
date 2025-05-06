import { BotoAnterior, BotoAnteriorDisabled, BotoSeguent, BotoSeguentDisabled } from './BotonsPaginacio.jsx'
import './PaginacioMenus.css'

export const PaginacioMenus = ({ totalApats, apatsPerPagina, paginaActual, setPaginaActual }) => {

    const numerosDePagina = [];

    for (let i = 1; i <= Math.ceil(totalApats/apatsPerPagina); i++) {
        numerosDePagina.push(i)
    }

    const paginaDrecera = num => {
        setPaginaActual(num)
    }

    const className_article_pagines = 'cn-article-pagines-paginacio-menus';
    const className_span_pagines = 'cn-span-pagines-paginacio-menus';

    return (
        <article className={className_article_pagines}>
            {paginaActual === 1
                ? <BotoAnteriorDisabled pA={paginaActual} sPA={setPaginaActual} />
                : <BotoAnterior pA={paginaActual} sPA={setPaginaActual} />
            }
            <span className={className_span_pagines}>
                {numerosDePagina.map((item) => (
                    <button
                        key={item}
                        className={`${
                            item === paginaActual ? 'cn-actiu-span-bttn-paginacio-menus' : 'cn-desactiu-span-bttn-paginacio-menus'
                        }`}
                        id={`id_${item}_span_bttn_paginacio_menus`}
                        name={'numeroPagina'}
                        onClick={() => paginaDrecera(item)}
                    >
                        {item}
                    </button>
                ))}
            </span>
            {paginaActual >= numerosDePagina.length
                ? <BotoSeguentDisabled pA={paginaActual} sPA={setPaginaActual} />
                : <BotoSeguent pA={paginaActual} sPA={setPaginaActual} />
            }
        </article>
    )
}