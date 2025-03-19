import './LlistaApats.css'
import { useState, useEffect } from 'react'

export const LlistaApats = () => {

    const [esTancat, setEsTancat] = useState(false)

    const tancarFinestra = () => {
        setEsTancat(!esTancat);
    }

    useEffect(() => {
        if (esTancat) {
            const section = document.getElementById('id_section_llista_apats');
            const article = document.getElementById('id_article_llista_apats');
            article.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            const section = document.getElementById('id_section_llista_apats');
            const article = document.getElementById('id_article_llista_apats');
            article.removeAttribute('style');
            section.removeAttribute('style');
        }
    }, [esTancat])

    const className_section = 'cn-section-llista-apats';
    const id_section = 'id_section_llista_apats'
    const className_article_nom = 'cn-article-nom-llista-apats';
    const className_h3_nom = 'cn-h3-nom-llista-apats';
    const nomSeccio = 'Llista d\'àpats';

    const className_bttn_finestra = 'cn-bttn-finestra-llista-apats';
    const id_bttn_finestra = 'id_bttn_finestra_llista_apats';
    const name_bttn_finestra = 'finestraDeLlistaApats';
    //const txt_bttn_finestra = '✕';

    const className_article_llista = 'cn-article-llista-apats';
    const id_article_llista = 'id_article_llista_apats';
    const className_ul_llista = 'cn-ul-llista-apats';
    const className_li_id_llista = 'cn-li-id-llista-apats';
    const className_li_nom_llista = 'cn-li-nom-llista-apats';
    const className_li_categoria_llista = 'cn-li-categoria-llista-apats';
    const className_li_descripcio_llista = 'cn-li-descripcio-llista-apats';

    const className_li_1 = 'cn-li-1-llista-apats';
    const className_li_2 = 'cn-li-2-llista-apats';
    const className_li_3 = 'cn-li-3-llista-apats';
    const className_li_4 = 'cn-li-4-llista-apats';

    const llistaID = 'ID de l\'àpat';
    const llistaNom = 'Nom de l\'àpat';
    const llistaCategoria = 'Categoria de l\'àpat';
    const llistaDescripcio = 'Breu descripció de l\'àpat';

    return (
        <>
            <section className={className_section} id={id_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                    <button
                        className={className_bttn_finestra}
                        id={id_bttn_finestra}
                        name={name_bttn_finestra}
                        onClick={tancarFinestra}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </article>
                <article className={className_article_llista} id={id_article_llista}>
                    <ul className={className_ul_llista}>
                        <li className={className_li_id_llista}>{llistaID}</li>
                        <li className={className_li_nom_llista}>{llistaNom}</li>
                        <li className={className_li_categoria_llista}>{llistaCategoria}</li>
                        <li className={className_li_descripcio_llista}>{llistaDescripcio}</li>
                    </ul>
                </article>
            </section>
        </>
    )
}