import './LlistaApats.css'
import { useState, useEffect } from 'react'
import { FormActualitzarApat } from './FormActualitzarApat.jsx'
import { CloseFinestra, FilterIcona, UpdateLlapis, DeletePaperera } from '../../../Icones.jsx'
import { useApats } from '../../../context/ApatsContext.jsx'

export const LlistaApats = () => {
    
    /* useApats & categories ================================================== A- */
    const {apats, eliminarApat} = useApats()

    const categories = {
        1: 'Primer',
        2: 'Segon',
        3: 'Postres'
    }
    /* useApats & categories ================================================== -Z */

    /* useState shaTancat ================================================== A- */
    const [shaTancat, setShaTancat] = useState(false)
    
    const tancarFinestra = () => {
        setShaTancat(!shaTancat);
    }

    useEffect(() => {
        const section = document.getElementById('id_section_llista_apats');
        const article = document.getElementById('id_article_llista_apats');
        if (shaTancat) {
            article.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            article.removeAttribute('style');
            section.removeAttribute('style');
        }
    }, [shaTancat])
    /* useState shaTancat ================================================== -Z */

    /* useState shaFiltrat ================================================== A- */
    const [shaFiltrat, setShaFiltrat] = useState(false)
    
    const filtreIcona = () => {
        setShaFiltrat(!shaFiltrat);
    }
    
    useEffect(() => {
        console.log('Filtre')
    }, [shaFiltrat])
    /* useState shaFiltrat ================================================== -Z */
    
    /* useState shaActualitzat ================================================== A- */
    const formAndBttn = {
        form: '',
        bttn: ''
    }

    /*const [shaActualitzat, setShaActualitzat] = useState(false)
    
    const actualitzarLlapis = event => {
        setShaActualitzat(!shaActualitzat);
        formAndBttn.form = event.currentTarget.parentNode.parentNode.nextElementSibling.id;
        formAndBttn.bttn = event.currentTarget.id;
    }

    useEffect(() => {
        console.log('Filtre')
        if (shaActualitzat) {
            document.getElementById(formAndBttn.form).setAttribute('style', 'display: flex;');
            document.getElementById(formAndBttn.bttn).setAttribute('style', 'background: #2bb;');
        } else {
            document.getElementById(formAndBttn.form).removeAttribute('style');
            document.getElementById(formAndBttn.bttn).removeAttribute('style');
        }
    }, [shaActualitzat])*/

    const [shaActualitzat, setShaActualitzat] = useState(false)
    
    const actualitzarLlapis = event => {
        setShaActualitzat(!shaActualitzat);
        const actualForm = event.currentTarget.parentNode.parentNode.nextElementSibling.id;
        const actualBttn = event.currentTarget.id;
        const form = document.getElementById(actualForm);
        const bttn = document.getElementById(actualBttn);
        if (shaActualitzat) {
            form.setAttribute('style', 'display: flex;');
            bttn.setAttribute('style', 'background: #2bb;');
        } else {
            form.removeAttribute('style');
            bttn.removeAttribute('style');
        }
    }

    useEffect(() => {
        console.log('Filtre')
    }, [shaActualitzat])
    /* useState shaActualitzat ================================================== -Z */

    const className_section = 'cn-section-llista-apats';
    const id_section = 'id_section_llista_apats'

    const className_article_nom = 'cn-article-nom-llista-apats';
    const className_h3_nom = 'cn-h3-nom-llista-apats';
    const nomSeccio = 'Llista d\'àpats';

    const className_article_llista = 'cn-article-llista-apats';
    const id_article_llista = 'id_article_llista_apats';
    const className_ul_llista = 'cn-ul-llista-apats';

    const className_li_update_llista = 'cn-li-update-llista-apats';
    const className_li_id_llista = 'cn-li-id-llista-apats';
    const className_li_nom_llista = 'cn-li-nom-llista-apats';
    const className_li_categoria_llista = 'cn-li-categoria-llista-apats';
    const className_li_descripcio_llista = 'cn-li-descripcio-llista-apats';
    const className_li_delete_llista = 'cn-li-delete-llista-apats';

    const className_div_llista = 'cn-div-llista-apats';

    const className_li_item_update = 'cn-li-item-update-llista-apats';
    const className_li_item_id = 'cn-li-item-id-llista-apats';
    const className_li_item_nom = 'cn-li-item-nom-llista-apats';
    const className_li_item_categoria = 'cn-li-item-categoria-llista-apats';
    const className_li_item_descripcio = 'cn-li-item-descripcio-llista-apats';
    const className_li_item_delete = 'cn-li-item-delete-llista-apats';

    const llistaID = 'ID de l\'àpat';
    const llistaNom = 'Nom de l\'àpat';
    const llistaCategoria = 'Categoria';
    const llistaDescripcio = 'Breu descripció de l\'àpat';

    const className_bttn_finestra = 'cn-bttn-finestra-llista-apats';
    const id_bttn_finestra = 'id_bttn_finestra_llista_apats';
    const name_bttn_finestra = 'finestraDeLlistaApats';

    const className_bttn_filtre = 'cn-bttn-filtre-llista-apats';
    const id_bttn_filtre = 'id_bttn_filtre_llista_apats';
    const name_bttn_filtre = 'filtreDeLlistaApats';

    const className_bttn_update = 'cn-bttn-update-llista-apats';
    const id_bttn_update = 'id_bttn_update_llista_apats';
    const name_bttn_update = 'updateDeLlistaApats';

    const className_bttn_delete = 'cn-bttn-delete-llista-apats';
    const id_bttn_delete = 'id_bttn_delete_llista_apats';
    const name_bttn_delete = 'deleteDeLlistaApats';

    return (
        <>
            <section className={className_section} id={id_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                    <button
                        className={className_bttn_filtre}
                        id={id_bttn_filtre}
                        name={name_bttn_filtre}
                        onClick={filtreIcona}
                    >
                        <FilterIcona />
                    </button>
                    <button
                        className={className_bttn_finestra}
                        id={id_bttn_finestra}
                        name={name_bttn_finestra}
                        onClick={tancarFinestra}
                    >
                        <CloseFinestra />
                    </button>
                </article>
                <article className={className_article_llista} id={id_article_llista}>
                    <ul className={className_ul_llista}>
                        <li className={className_li_update_llista}></li>
                        <li className={className_li_id_llista}>{llistaID}</li>
                        <li className={className_li_nom_llista}>{llistaNom}</li>
                        <li className={className_li_categoria_llista}>{llistaCategoria}</li>
                        <li className={className_li_descripcio_llista}>{llistaDescripcio}</li>
                        <li className={className_li_delete_llista}></li>
                    </ul>
                    {apats.map((apat) => (
                        <div key={apat.id} className={className_div_llista}>
                            <ul key={apat.id} className={className_ul_llista}>
                                <li className={className_li_item_update}>
                                    <button
                                        className={className_bttn_update}
                                        id={id_bttn_update}
                                        name={name_bttn_update}
                                        onClick={actualitzarLlapis}
                                    >
                                        <UpdateLlapis />
                                    </button>
                                </li>
                                <li className={className_li_item_id}>{apat.id}</li>
                                <li className={className_li_item_nom}>{apat.nom}</li>
                                <li className={className_li_item_categoria}>{categories[apat.categoriaId]}</li>
                                <li className={className_li_item_descripcio}>{apat.descripcio}</li>
                                <li className={className_li_item_delete}>
                                    <button
                                        className={className_bttn_delete}
                                        id={id_bttn_delete}
                                        name={name_bttn_delete}
                                        onClick={() => eliminarApat(apat.id)}
                                    >
                                        <DeletePaperera />
                                    </button>
                                </li>
                            </ul>
                            <FormActualitzarApat id={apat.id} />
                        </div>
                    ))}
                </article>
            </section>
        </>
    )
}