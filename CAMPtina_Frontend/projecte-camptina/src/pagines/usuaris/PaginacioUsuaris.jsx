import { BotoUsuarisAnterior, BotoUsuarisAnteriorDisabled, BotoUsuarisSeguent, BotoUsuarisSeguentDisabled } from './BotonsPaginacioUsuaris.jsx';
import './PaginacioUsuaris.css'

export const PaginacioUsuaris = ({ totalUsuaris, usuarisPerPagina, paginaActual, setPaginaActual }) => {

    const numerosDePagina = [];

    for (let i = 1; i <= Math.ceil(totalUsuaris/usuarisPerPagina); i++) {
        numerosDePagina.push(i)
    }

    const paginaDrecera = num => {
        setPaginaActual(num)
    }

    const className_article_pagines = 'cn-article-pagines-paginacio-usuaris';
    const id_article_pagines = 'id_article_pagines_paginacio_usuaris';

    const className_span_pagines = 'cn-span-pagines-paginacio-usuaris';

    return (
        <article className={className_article_pagines} id={id_article_pagines}>
            {paginaActual === 1
                ? <BotoUsuarisAnteriorDisabled pA={paginaActual} sPA={setPaginaActual} />
                : <BotoUsuarisAnterior pA={paginaActual} sPA={setPaginaActual} />
            }
            <span className={className_span_pagines}>
                {numerosDePagina.map((item) => (
                    <button
                        key={item}
                        className={`${
                            item === paginaActual ? 'cn-actiu-span-bttn-paginacio-usuaris' : 'cn-desactiu-span-bttn-paginacio-usuaris'
                        }`}
                        id={`id_${item}_span_bttn_paginacio_usuaris`}
                        name={'numeroPagina'}
                        onClick={() => paginaDrecera(item)}
                    >
                        {item}
                    </button>
                ))}
            </span>
            {paginaActual >= numerosDePagina.length
                ? <BotoUsuarisSeguentDisabled pA={paginaActual} sPA={setPaginaActual} />
                : <BotoUsuarisSeguent pA={paginaActual} sPA={setPaginaActual} />
            }
        </article>
    )
}