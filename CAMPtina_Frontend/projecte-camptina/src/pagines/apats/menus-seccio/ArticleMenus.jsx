import { useState, useEffect } from 'react'
import { RemoveMenu } from '../../../Icones.jsx'
import './ArticleMenus.css'

export const ArticleMenus = ({ nomArticle, categoriaNom, nomLlista, menuPerCategoria, llista, setLlista, removeLlista }) => {

    const treureDelMenu = item => {
        removeLlista(item)
    }

    /*useEffect(() => {
        menuPerCategoria.apatsPerCategoria[`${nomLlista}`] !== undefined
            ? setLlista(menuPerCategoria.apatsPerCategoria[`${nomLlista}`])
            : setLlista(llista)
    }, [])*/

    const className_article = 'cn-article-menus';

    const className_h3_nom = 'cn-h3-nom-article-menus';

    const className_div_nom_bttn = 'cn-div-nom-bttn-article-menus';
    const className_h4_nom = 'cn-h4-nom-article-menus';

    const className_bttn_remove = 'cn-bttn-remove-article-menus';
    const name_bttn_remove = 'removeMenu';

    return (
        <article className={className_article}>
            <div className={`cn-${categoriaNom}-article-menus`}>
                <h3 className={className_h3_nom}>{nomArticle}</h3>
            </div>
                {llista.map((item) => {
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