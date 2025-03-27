import './LlistaApats.css'
import { useState, useEffect } from 'react'
import { useApats } from '../ApatsContext.jsx'

export const LlistaApats = () => {
    const { apats, eliminarApat } = useApats()
    const [esTancat, setEsTancat] = useState(false)
    
    const tancarFinestra = () => {
        setEsTancat(!esTancat);
    }

    useEffect(() => {
        //if (esTancat) {
            //const section = document.getElementById('id_section_llista_apats');
            const article = document.getElementById('id_article_llista_apats');
            //article.setAttribute('style', 'display: none;');
            //section.setAttribute('style', 'height: 70px');
            article.style.display = esTancat ? 'none' : '';
        //} else {
            //const section = document.getElementById('id_section_llista_apats');
            //const article = document.getElementById('id_article_llista_apats');
            //article.removeAttribute('style');
            //section.removeAttribute('style');
            //article.style.display = '';
        //}
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
    const className_li_eliminar_llista = 'cn-li-eliminar-llista-apats';

    const className_li_1 = 'cn-li-1-llista-apats';
    const className_li_2 = 'cn-li-2-llista-apats';
    const className_li_3 = 'cn-li-3-llista-apats';
    const className_li_4 = 'cn-li-4-llista-apats';

    const llistaID = 'ID de l\'àpat';
    const llistaNom = 'Nom de l\'àpat';
    const llistaCategoria = 'Categoria de l\'àpat';
    const llistaDescripcio = 'Breu descripció de l\'àpat';

    const className_bttn_eliminar = 'cn-bttn-eliminar';

    return (
        <>
            <section 
                className={`${className_section} ${apats.length > 0 ? 'plena' : ''} `} 
                id={id_section}
            >
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
                        <li className={className_li_eliminar_llista}></li>
                    </ul>
                    {apats.map((apat) => (
                            <ul key={apat.id} className={className_ul_llista}>
                                <li className={className_li_id_llista}>{apat.id}</li>
                                <li className={className_li_nom_llista}>{apat.nom}</li>
                                <li className={className_li_categoria_llista}>{apat.categoria}</li>
                                <li className={className_li_descripcio_llista}>{apat.descripcio}</li>
                                <li className={className_li_eliminar_llista}>
                                    <button 
                                        onClick={() => eliminarApat(apat.id)}
                                        className={className_bttn_eliminar}
                                    >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                                            stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 
                                                0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 
                                                0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 
                                                0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 
                                                0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 
                                                2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                    </button>
                                </li> 
                            </ul>           
                    ))}
                </article>
            </section>
        </>
    )
}