import './LlistaUsuaris.css'
import { useState, useEffect, useContext } from 'react'
import { useAxiosPeticionsUsuaris } from "../../services/UsuarisPeticions.js"
import { CloseFinestra, FilterIcona, UpdateLlapis, DeletePaperera } from '../../Icones.jsx'
import { FormActualitzarUsuaris } from './FormActualitzarUsuaris.jsx'
//import { useAxiosPeticionsRols } from '../../services/RolsPeticions.js'
import { DadesCamptinaContext } from "../../services/DadesCamptina.jsx";

export const LlistaUsuaris = () => {
    //const { usuaris, eliminarUsuari } = useAxiosPeticionsUsuaris()
    const { usuaris, eliminarUsuari, rols } = useContext(DadesCamptinaContext)
    /*const rols = {
        1: 'Gestor',
        2: 'Treballador',
    }*/
    //const { rols } = useAxiosPeticionsRols();

    const [shaTancat, setShaTancat] = useState(false)
    const [editantId, setEditantId] = useState(null);
    const tancarFinestra = () => {
        setShaTancat(!shaTancat);
    }


    const obtenirRol = (rolId) => {
        if (!rols || rols.length === 0) {
          return 'Carregant...'; // O cualquier otro mensaje/valor por defecto
        }
        const rolTrobat = rols.find((rol) => rol.id === rolId);
        return rolTrobat ? rolTrobat.nom : 'Rol Desconegut';
      };
    useEffect(() => {
        const section = document.getElementById('id_section_llista_usuaris');
        const article = document.getElementById('id_article_llista_usuaris');
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
        const select = document.getElementById('id_select_filtre_categoria_llista_usuaris');
        const bttn = document.getElementById('id_bttn_filtre_llista_usuaris');
        if (shaFiltrat) {
            select.setAttribute('style', 'display: flex;');
            bttn.setAttribute('style', 'background: #075;');
        } else {
            select.removeAttribute('style');
            bttn.removeAttribute('style');
        }
    }, [shaFiltrat])

    const [filters, setFilters] = useState({
        rolId: 0
    })

    const maneigFiltre = (event) => {
        const valor = parseInt(event.currentTarget.value)
        setFilters(estatAnterior => ({
            ...estatAnterior,
            rolId: valor
        }))
    }

    const filtreUsuaris = (usuaris) => {
        return usuaris.filter(usuari => {
            return (
                filters.rolId === 0 ||
                usuari.rolId === filters.rolId
            )
        })
    }

    const filtratUsuaris = filtreUsuaris(usuaris)
    /* useState shaFiltrat ================================================== -Z */

    /* useState shaActualitzat ================================================== A- */
    /*const formAndBttn = {
        form: '',
        bttn: ''
    }*/

    //const [shaActualitzat, setShaActualitzat] = useState(false)
    /*const actualitzarLlapis = event => {
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
    }*/

    useEffect(() => {
        const section = document.getElementById("id_section_llista_usuaris");
        const article = document.getElementById("id_article_llista_usuaris");
        if (shaTancat) {
            article.setAttribute("style", "display: none;");
            section.setAttribute("style", "height: 70px");
        } else {
            article.removeAttribute("style");
            section.removeAttribute("style");
        }
    }, [shaTancat]);

    const className_section = 'cn-section-llista-usuaris';
    const id_section = 'id_section_llista_usuaris'

    const className_article_nom = 'cn-article-nom-llista-usuaris';
    const className_h3_nom = 'cn-h3-nom-llista-usuaris';
    const nomSeccio = 'Llista d\'usuaris';

    const className_article_llista = 'cn-article-llista-usuaris';
    const id_article_llista = 'id_article_llista_usuaris';
    const className_ul_llista = 'cn-ul-llista-usuaris';

    const className_li_update_llista = 'cn-li-update-llista-usuaris';
    const className_li_id_llista = 'cn-li-id-llista-usuaris';
    const className_li_nom_llista = 'cn-li-nom-llista-usuaris';
    const className_li_rol_llista = 'cn-li-categoria-llista-usuaris';
    const className_li_email_llista = 'cn-li-descripcio-llista-usuaris';
    const className_li_delete_llista = 'cn-li-delete-llista-usuaris';

    const className_div_llista = 'cn-div-llista-usuaris';

    const className_li_item_update = 'cn-li-item-update-llista-usuaris';
    const className_li_item_id = 'cn-li-item-id-llista-usuaris';
    const className_li_item_nom = 'cn-li-item-nom-llista-usuaris';
    const className_li_item_rol = 'cn-li-item-categoria-llista-usuaris';
    const className_li_item_email = 'cn-li-item-descripcio-llista-usuaris';
    const className_li_item_delete = 'cn-li-item-delete-llista-usuaris';

    const llistaID = 'ID';
    const llistaNom = 'Nom Complet';
    const llistaEmail = 'Correu electrònic';
    const llistaRol = 'Rol';

    const className_bttn_finestra = 'cn-bttn-finestra-llista-usuaris';
    const id_bttn_finestra = 'id_bttn_finestra_llista_usuaris';
    const name_bttn_finestra = 'finestraDeLlistausuaris';

    const className_div_filtre_intern = 'cn-div-filtre-intern-llista-usuaris';

    const className_bttn_filtre = 'cn-bttn-filtre-llista-usuaris';
    const id_bttn_filtre = 'id_bttn_filtre_llista_usuaris';
    const name_bttn_filtre = 'filtreDeLlistausuaris';

    const className_select_filtre_categoria = 'cn-select-filtre-categoria-llista-usuaris';
    const id_select_filtre_categoria = 'id_select_filtre_categoria_llista_usuaris';
    const name_select_filtre_categoria = 'categoriaFiltre';

    const className_bttn_update = 'cn-bttn-update-llista-usuaris';
    const id_bttn_update = 'id_bttn_update_llista_usuaris';
    const name_bttn_update = 'updateDeLlistausuaris';

    const className_bttn_delete = 'cn-bttn-delete-llista-usuaris';
    const id_bttn_delete = 'id_bttn_delete_llista_usuaris';
    const name_bttn_delete = 'deleteDeLlistausuaris';

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
                            <option value='' disabled></option>
                            {rols.map((rol) => (
                                <option key={rol.id} value={rol.id}>
                                    {rol.nom}
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
                <article className={className_article_llista} id={id_article_llista}>
                    <ul className={className_ul_llista}>
                        <li className={className_li_update_llista}></li>
                        <li className={className_li_id_llista}>{llistaID}</li>
                        <li className={className_li_nom_llista}>{llistaNom}</li>
                        <li className={className_li_rol_llista}>{llistaRol}</li>
                        <li className={className_li_email_llista}>{llistaEmail}</li>
                        <li className={className_li_delete_llista}></li>
                    </ul>
                    {filtratUsuaris.map((usuari) => (
                        <div key={usuari.id} className={className_div_llista}>
                            {editantId === usuari.id ? (
                                <FormActualitzarUsuaris
                                    usuari={usuari}
                                    onCancel={() => setEditantId(null)}
                                />
                            ) : (
                                <ul key={usuari.id} className={className_ul_llista}>
                                    <li className={className_li_item_update}>
                                        <button
                                            className={className_bttn_update}
                                            id={id_bttn_update}
                                            name={name_bttn_update}
                                            onClick={() => setEditantId(usuari.id)}
                                        >
                                            <UpdateLlapis />
                                        </button>
                                    </li>
                                    <li className={className_li_item_id}>{usuari.id}</li>
                                    <li className={className_li_item_nom}>{usuari.nom} {usuari.cognom1} {usuari.cognom2} </li>
                                    <li className={className_li_item_rol}>{obtenirRol(usuari.rolId)}</li>
                                    <li className={className_li_item_email}>{usuari.email}</li>
                                    <li className={className_li_item_delete}>
                                        <button
                                            className={className_bttn_delete}
                                            id={id_bttn_delete}
                                            name={name_bttn_delete}
                                            onClick={() => eliminarUsuari(usuari.id)}
                                        >
                                            <DeletePaperera />
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};