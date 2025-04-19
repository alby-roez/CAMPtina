import { useState, useEffect } from 'react'
import { PaginacioMenus } from './PaginacioMenus.jsx'
import { useMenus } from './LogicaMenus.js'
import './LlistaMenus.css'
import { BotoAddMenu, BotoAddMenuAfegit } from './BotonsMenus.jsx'
import { useAxiosPeticionsMenusApats } from '../../../services/AxiosPeticionsMenusApats.js'
import { useAxiosPeticionsApats } from '../../../services/AxiosPeticionsApats.js'

export const LlistaMenus = () => {
    const { apats, carregarApats } = useAxiosPeticionsApats()

    useEffect(() => {
        carregarApats()
    }, [])

    const totalApats = apats.length;
    const [apatsPerPagina, setApatsPerPagina] = useState(5)
    const [paginaActual, setPaginaActual] = useState(1)

    const indexFinal = paginaActual * apatsPerPagina
    const indexInicial = indexFinal - apatsPerPagina

    const { menuPrimer, menuSegon, menuPostres, addMenuPrimer, addMenuSegon, addMenuPostres } = useMenus()

    const [filtreApat, setFiltreApat] = useState({
        name: ''
    })

    const maneigFiltre = event => {
        const valor = event.currentTarget.value
        setFiltreApat(estatAnterior => ({
            ... estatAnterior,
            name: valor
        }))
    }
    
    const filtrarLlista = (apats) => {
        return apats.filter(apat => {
            return (
                filtreApat.name === '' ||
                apat.nom.includes(filtreApat.name)
            )
        })
    }

    const llistaFiltrada = filtrarLlista(apats)

    const className_section = 'cn-section-llista-menus';
    const id_section = 'id_section_llista_menus';

    const className_article_nom = 'cn-article-nom-llista-menus';
    const className_h3_nom = 'cn-h3-nom-llista-menus';
    const nomSeccio = 'Llista d\'àpats';

    const className_article_filtre = 'cn-article-filtre-llista-menus';
    const className_input_filtre = 'cn-input-filtre-llista-menus';
    const id_input_filtre = 'id_input_filtre_llista_menus';
    const name_input_filtre = 'nameInputFiltre';
    const placeholder_input_filtre = 'Nom de l\'àpat...';

    const className_article_llista = 'cn-article-llista-menus';
    const className_div_llista = 'cn-div-llista-menus';
    const className_h4_nom_llista = 'cn-h4-nom-llista-menus';

    const defaultItems = indexFinal - llistaFiltrada.length;
    const newArray = () => {
        let defaultArray = [];
        if (indexFinal > llistaFiltrada.length) {
            if (defaultItems === 4) {
                return ['no_1', 'no_2', 'no_3', 'no_4']
            } else if (defaultItems === 3) {
                return ['no_1', 'no_2', 'no_3']
            } else if (defaultItems === 2) {
                return ['no_1', 'no_2']
            } else if (defaultItems === 1) {
                return ['no_1']
            } else if (defaultItems === 0) {
                return defaultArray
            } else {
                return ['no_1', 'no_2', 'no_3', 'no_4', 'no_5']
            }
        } else {
            return defaultArray
        }
    }

    /* categoriaId class ================================================== A- */
    const categoriaApat = id => {
        if (id === 1) {
            return 'cn-div-nom-1-llista-menus'
        } else if (id === 2) {
            return 'cn-div-nom-2-llista-menus'
        } else if (id === 3) {
            return 'cn-div-nom-3-llista-menus'
        } else {
            return 'cn-div-nom-llista-menus'
        }
    }
    /* categoriaId class ================================================== -Z */

    const checkMenu = (apat) => {
        if (apat.categoriaId === 1) {
            return menuPrimer.some(item => item.id === apat.id)
        } else if (apat.categoriaId === 2) {
            return menuSegon.some(item => item.id === apat.id)
        } else if (apat.categoriaId === 3) {
            return menuPostres.some(item => item.id === apat.id)
        } else {
            return false
        }
    }

    const fn_menu = categoria => {
        if (categoria === 1) {
            return addMenuPrimer
        } else if (categoria === 2) {
            return addMenuSegon
        } else if (categoria === 3) {
            return addMenuPostres
        } else {
            return {}
        }
    }

    return (
        <section className={className_section} id={id_section}>
            <article className={className_article_nom}>
                <h3 className={className_h3_nom}>{nomSeccio}</h3>
            </article>
            <article className={className_article_filtre}>
                <input
                    className={className_input_filtre}
                    id={id_input_filtre}
                    name={name_input_filtre}
                    placeholder={placeholder_input_filtre}
                    type='search'
                    onInput={maneigFiltre}
                />
            </article>
            <article className={className_article_llista}>
                {llistaFiltrada.map((apat) => {
                    const esAfegit = checkMenu(apat)
                    const llistaActual = fn_menu(apat.categoriaId)
                    return (
                        <div key={apat.id} className={className_div_llista}>
                            <div className={esAfegit ? 'cn-div-nom-llista-menus' : categoriaApat(apat.categoriaId)}>
                                <h4 className={className_h4_nom_llista}>{apat.nom}</h4>
                            </div>
                            { esAfegit
                                ? <BotoAddMenuAfegit id={apat.id} />
                                : <BotoAddMenu id={apat.id} addMenu={llistaActual} apat={apat} />
                            }
                        </div>
                    )
                }).slice(indexInicial, indexFinal)}
                {/*{newArray().map((item) => (
                    <LlistaItem key={item} />
                ))}*/}
            </article>
            <PaginacioMenus
                totalApats={totalApats}
                apatsPerPagina={apatsPerPagina}
                paginaActual={paginaActual}
                setPaginaActual={setPaginaActual}
            />
        </section>
    )
}