import { useState, useEffect } from 'react'
import { RemoveMenu } from '../../../Icones.jsx'
import { useMenus } from './LogicaMenus.js'
import './ArticleMenus.css'
import { useAxiosPeticionsMenusApats } from '../../../services/AxiosPeticionsMenusApats.js'
import { useAxiosPeticionsApats } from '../../../services/AxiosPeticionsApats.js'

export const ArticleMenus = ({ nomArticle, categoriaNom, typeCategoria, llista, setLlista, addLlista }) => {
    const { menuPrimer, menuSegon, menuPostres, setMenuPrimer, setMenuSegon, setMenuPostres, addMenuPrimer, addMenuSegon, addMenuPostres, removeMenuPrimer, removeMenuSegon, removeMenuPostres } = useMenus()
    const { menusApats, carregarMenusApats } = useAxiosPeticionsMenusApats()
    const { apats, carregarApats } = useAxiosPeticionsApats()

    const treureDelMenu = item => {
        if (typeCategoria === 1) {
            removeMenuPrimer(item)
        } else if (typeCategoria === 2) {
            removeMenuSegon(item)
        } else if (typeCategoria === 3) {
            removeMenuPostres(item)
        } else {
            return {}
        }
    }

    const afegirAlMenu = item => {
        if (item.categoriaId === 1) {
            addMenuPrimer(item)
        } else if (item.categoriaId === 2) {
            addMenuSegon(item)
        } else if (item.categoriaId === 3) {
            addMenuPostres(item)
        } else {
            return {}
        }
    }

    const setLlistaAA = () => {
        console.log('Inici')
        console.log(llistaApats)
        console.log('---')
        console.log(llistaMenusApats)
        console.log('FI')
        for (let i = 0; i < llistaApats.length; i++) {
            for (let j = 0; llistaMenusApats.length; j++) {
                if (llistaApats[i].id === llistaMenusApats[j].apatId) {
                    afegirAlMenu(llistaApats[i])
                }
            }
        }
    }

    const setLlistaPP = () => {
        console.log('Inici')
        console.log(apats)
        console.log('---')
        console.log(menusApats)
        console.log('FI')
        let add = [];
        for (let i = 0; i < apats.length; i++) {
            for (let j = 0; menusApats.length; j++) {
                console.log(apats[i].id)
                if (apats[i].id === menusApats[j].apatId) {
                    add.push(apats[i])
                }
            }
        }
        console.log(add, 'ggooll')
    }

    useEffect(() => {
        console.log(apats, 'Article Menus')
        carregarApats()
        carregarMenusApats()
        //setLlista()
        //setMenuPrimer([])
        //console.log(add)
    }, [])

    const className_article = 'cn-article-menus';

    const className_h3_nom = 'cn-h3-nom-article-menus';

    const className_div_nom_bttn = 'cn-div-nom-bttn-article-menus';
    const className_h4_nom = 'cn-h4-nom-article-menus';

    const className_bttn_remove = 'cn-bttn-remove-article-menus';
    const name_bttn_remove = 'removeMenu';

    const [filters, setFilters] = useState({
        categoriaId: 0
    })

    const maneigFiltre = (event) => {
        const valor = parseInt(event.currentTarget.value)
        setFilters(estatAnterior => ({
            ... estatAnterior,
            categoriaId: valor
        }))
    }

    const fn_sl = (item) => {
        setLlista(item)
    }

    const filtrarLlistaARA = (items, itemsApats) => {
        console.log('QWERTYUIOP', items, itemsApats)
        const llistaApats = items.filter(item => item.categoriaId === typeCategoria)
        let llistaMenuApats = [];
        for (let i = 0; i < itemsApats.length; i++) {
            const itemActual = llistaApats.filter(apat => apat.id === itemsApats[i].apatId)
            if (itemActual.length !== 0) {
                llistaMenuApats.push(itemActual[0])
            }
        }
        console.log(llistaMenuApats[0])
        fn_sl(llistaMenuApats)
    }

    const filtrarLlista = (items, itemsApats) => {
        console.log('QWERTYUIOP', items, itemsApats)
        //filtrarLlistaARA(items, itemsApats)
        /*console.log('QWERTYUIOP', items, itemsApats)
        const llistaApats = items.filter(item => item.categoriaId === typeCategoria)
        let llistaMenuApats = [];
        for (let i = 0; i < itemsApats.length; i++) {
            const itemActual = llistaApats.filter(apat => apat.id === itemsApats[i].apatId)
            if (itemActual.length !== 0) {
                llistaMenuApats.push(itemActual[0])
            }
        }
        console.log(llistaMenuApats[0])
        fn_sl(llistaMenuApats)*/
        //llista.push(llistaMenuApats[0])
        return llista
        /*return items.filter(item => {
            const llistaActual = itemsApats.filter(itemApat => {
                item.categoriaId === typeCategoria &&
                item.id === itemApat.apatId
            })
            console.log(llistaActual, 222)
            return llistaActual
        })*/
    }

    const llistaFiltrada = filtrarLlista(apats, menusApats)

    const llistaUtil = () => {
        if (typeCategoria === 1) {
            return menuPrimer
        } else if (typeCategoria === 2) {
            return menuSegon
        } else if (typeCategoria === 3) {
            return menuPostres
        } else {
            return []
        }
    }

    const fn_filtre = (id) => {
        return (
            apats.filter(apat => (
                apat.id === id
            ))
        )
    }

    const fn_trobat = (obj) => {
        const result = obj.some(item => item.categoriaId === typeCategoria)
        if (result) {
            //add(obj[0])
        }
        return result
    }

    return (
        <article className={className_article}>
            <div className={`cn-${categoriaNom}-article-menus`}>
                <h3 className={className_h3_nom}>{nomArticle}</h3>
            </div>
                {llistaFiltrada.map((item) => {
                    //const obj = fn_filtre(item.apatId)
                    //const trobat = fn_trobat(obj)
                    return (
                        <div key={item.id} className={className_div_nom_bttn} style={{justifyContent: 'space-between'}}>
                            <div className={`cn-${categoriaNom}-div-nom-article-menus`} style={{width: '50%'}}>
                                <h4 className={className_h4_nom}>{item.nom}</h4>
                            </div>
                            <button
                                className={className_bttn_remove}
                                id={`id_${item.id}_article_menus`}
                                name={name_bttn_remove}
                                onClick={() => treureDelMenu(item)}
                                style={{display: 'flex'}}
                            >
                                <RemoveMenu />
                            </button>
                        </div>
                    )
                })}
        </article>
    )
}