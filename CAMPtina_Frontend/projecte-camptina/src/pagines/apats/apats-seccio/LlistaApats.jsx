import './LlistaApats.css'
import { useState, useEffect, useContext } from 'react'
import { FormActualitzarApat } from './FormActualitzarApat.jsx'
import { CloseFinestra, FilterIcona, DeletePaperera } from '../../../Icones.jsx'
import { DadesCamptinaContext } from '../../../services/DadesCamptina.jsx'
import { PaginacioApats } from './PaginacioApats.jsx'
import { BotoUpdate, BotoUpdateDisabled } from './BotonsApats.jsx'

export const LlistaApats = () => {

    const { apats, carregarApats, eliminarApat, categories } = useContext(DadesCamptinaContext)

    useEffect(() => {
        carregarApats()
    }, [])

    const obtenirCategoria = (categoriaId) => {
        if (!categories || categories.length === 0) {
            return 'Carregant...';
        }
        const categoriaTrobada = categories.find((categoria) => categoria.id === categoriaId);
        return categoriaTrobada ? categoriaTrobada.nom.charAt(0).toUpperCase() + categoriaTrobada.nom.slice(1).toLowerCase() : 'Categoria no existent';
    }

    const totalLlistaApats = apats.length;

    const [apatsPerPagina] = useState(10)
    const [paginaActual, setPaginaActual] = useState(1)

    const indexApatsFinal = paginaActual * apatsPerPagina
    const indexApatsInicial = indexApatsFinal - apatsPerPagina

    const [shaTancat, setShaTancat] = useState(false)

    const tancarFinestra = () => {
        setShaTancat(!shaTancat);
    }

    useEffect(() => {
        const section = document.getElementById('id_section_llista_apats');
        const article = document.getElementById('id_article_llista_apats');
        const search = document.getElementById('id_article_filtre_search_llista_apats');
        const paginacio = document.getElementById('id_article_pagines_paginacio_apats');
        if (shaTancat) {
            article.setAttribute('style', 'display: none;');
            search.setAttribute('style', 'display: none;');
            paginacio.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            article.removeAttribute('style');
            section.removeAttribute('style');
            search.removeAttribute('style');
            paginacio.removeAttribute('style');
        }
    }, [shaTancat])

    const [shaFiltrat, setShaFiltrat] = useState(false)

    const filtreIcona = () => {
        setShaFiltrat(!shaFiltrat);
    }

    useEffect(() => {
        const select = document.getElementById('id_select_filtre_categoria_llista_apats');
        const bttn = document.getElementById('id_bttn_filtre_llista_apats');
        if (shaFiltrat) {
            select.setAttribute('style', 'display: flex;');
            bttn.setAttribute('style', 'background: #075;');
        } else {
            select.removeAttribute('style');
            bttn.removeAttribute('style');
        }
    }, [shaFiltrat])

    const [txtActual, setTxtActual] = useState('')

    const maneigFiltreBuscador = event => {
        setTxtActual(event.currentTarget.value)
    }

    const [filters, setFilters] = useState({
        categoriaId: 0
    })

    const maneigFiltre = (event) => {
        const valor = parseInt(event.currentTarget.value)
        setFilters(estatAnterior => ({
            ...estatAnterior,
            categoriaId: valor
        }))
    }

    const filtreApats = (apats) => {
        return apats.filter(apat => {
            return (
                (filters.categoriaId === 0 ||
                    apat.categoriaId === filters.categoriaId) &&
                    (txtActual === '' ||
                    apat.nom.toLowerCase().includes(txtActual.toLowerCase()))
            )
        })
    }

    const filtratApats = filtreApats(apats)

    const [shaActualitzat, setShaActualitzat] = useState(true)
    const [idActualitzacio, setIdActualitzacio] = useState({
        id: 0
    })

    const actualitzarLlapis = id => {
        const actualForm = `id_${id}_form_update_llista_apats`;
        const actualBttn = `id_${id}_bttn_update_llista_apats`;
        const form = document.getElementById(actualForm);
        const bttn = document.getElementById(actualBttn);
        if (shaActualitzat) {
            form.setAttribute('style', 'display: flex;');
            bttn.setAttribute('style', 'background: #2bb;');
        } else {
            form.removeAttribute('style');
            bttn.removeAttribute('style');
        }
        setShaActualitzat(!shaActualitzat);
        setIdActualitzacio(estatAnterior => ({
            ...estatAnterior,
            id: id
        }))
    }

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

    const llistaID = 'Id';
    const llistaNom = 'Nom de l\'àpat';
    const llistaCategoria = 'Categoria';
    const llistaDescripcio = 'Descripció de l\'àpat';

    const className_bttn_finestra = 'cn-bttn-finestra-llista-apats';
    const id_bttn_finestra = 'id_bttn_finestra_llista_apats';
    const name_bttn_finestra = 'finestraDeLlistaApats';

    const className_div_filtre_intern = 'cn-div-filtre-intern-llista-apats';

    const className_bttn_filtre = 'cn-bttn-filtre-llista-apats';
    const id_bttn_filtre = 'id_bttn_filtre_llista_apats';
    const name_bttn_filtre = 'filtreDeLlistaApats';

    const className_select_filtre_categoria = 'cn-select-filtre-categoria-llista-apats';
    const id_select_filtre_categoria = 'id_select_filtre_categoria_llista_apats';
    const name_select_filtre_categoria = 'categoriaFiltre';

    const className_bttn_delete = 'cn-bttn-delete-llista-apats';
    const id_bttn_delete = 'id_bttn_delete_llista_apats';
    const name_bttn_delete = 'deleteDeLlistaApats';

    const className_article_filtre_search = 'cn-article-filtre-search-llista-apats';
    const id_article_filtre_search = 'id_article_filtre_search_llista_apats';
    const className_input_filtre_search = 'cn-input-filtre-search-llista-apats';
    const id_input_filtre_search = 'id_input_filtre_search_llista_apats';
    const name_input_filtre_search = 'nameInputFiltreSearch';
    const placeholder_input_filtre_search = 'Nom de l\'àpat...';

    return (
        <>
            <section className={className_section} id={id_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                    <div className={className_div_filtre_intern}>
                        <button
                            className={className_bttn_filtre}
                            id={id_bttn_filtre}
                            name={name_bttn_filtre}
                            onClick={filtreIcona}
                        >
                            <FilterIcona />
                        </button>
                        <select
                            className={className_select_filtre_categoria}
                            id={id_select_filtre_categoria}
                            name={name_select_filtre_categoria}
                            onChange={maneigFiltre}
                        >
                            <option value={0}>Totes</option>
                            {categories.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nom.charAt(0).toUpperCase() + categoria.nom.slice(1).toLowerCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        className={className_bttn_finestra}
                        id={id_bttn_finestra}
                        name={name_bttn_finestra}
                        onClick={tancarFinestra}
                    >
                        <CloseFinestra />
                    </button>
                </article>
                <article className={className_article_filtre_search} id={id_article_filtre_search}>
                    <input
                        className={className_input_filtre_search}
                        id={id_input_filtre_search}
                        name={name_input_filtre_search}
                        placeholder={placeholder_input_filtre_search}
                        type='search'
                        onInput={maneigFiltreBuscador}
                    />
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
                    {filtratApats.map((apat) => (
                        <div key={apat.id} className={className_div_llista}>
                            <ul key={apat.id} className={className_ul_llista}>
                                <li className={className_li_item_update}>
                                    {shaActualitzat || idActualitzacio.id === apat.id
                                        ? <BotoUpdate id={apat.id} actualitzarLlapis={id => actualitzarLlapis(id)} />
                                        : <BotoUpdateDisabled />}
                                </li>
                                <li className={className_li_item_id} id={`id_${apat.id}_li_item_id_llista_apats`}>{apat.id}</li>
                                <li className={className_li_item_nom} id={`id_${apat.id}_li_item_nom_llista_apats`}>{apat.nom}</li>
                                <li className={className_li_item_categoria} id={`id_${apat.id}_li_item_categoria_llista_apats`}>{obtenirCategoria(apat.categoriaId)}</li>
                                <li className={className_li_item_descripcio} id={`id_${apat.id}_li_item_descripcio_llista_apats`}>{apat.descripcio}</li>
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
                    )).slice(indexApatsInicial, indexApatsFinal)}
                </article>
                <PaginacioApats
                    totalApats={totalLlistaApats}
                    apatsPerPagina={apatsPerPagina}
                    paginaActual={paginaActual}
                    setPaginaActual={setPaginaActual}
                />
            </section>
        </>
    )
}