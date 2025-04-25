import { useContext, useState } from 'react'
import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import menus_carta from '../../assets/menus_carta.mp4'
import { ArticleMenus } from './menus-seccio/ArticleMenus.jsx'
import { LlistaMenus } from './menus-seccio/LlistaMenus.jsx'
import { UpdateQuadrat } from '../../Icones.jsx'
import { useAxiosPeticionsMenus } from '../../services/AxiosPeticionsMenus.js'
import './Menus.css'
import { useAxiosPeticionsMenusApats } from '../../services/AxiosPeticionsMenusApats.js'
import { useMenus } from './menus-seccio/LogicaMenus.js'
import { BotoActiu, BotoDesactiu } from './menus-seccio/BotonsMenus.jsx'

export default function Menus() {
    const { menus, carregarMenus, actualitzarMenus } = useAxiosPeticionsMenus()
    const { menusApats, menusIdApats, crearMenusApats, eliminarMenuApats } = useAxiosPeticionsMenusApats()
    const { menuPrimer, menuSegon, menuPostres, setMenuPrimer, setMenuSegon, setMenuPostres, removeMenuPrimer, removeMenuSegon, removeMenuPostres } = useMenus()

    const [menuActivedDesactived, setMenuActivedDesactived] = useState(true)

    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const className_bttn_update = 'cn-bttn-update-square-menus';
    const id_bttn_update = 'id_bttn_update_square_menus';
    const name_bttn_update = 'updateMenu';

    const className_span_menu_preu = 'cn-span-menu-preu-menus';

    const id_submit = 'id_submit_form_final_menus';
    const name_submit = 'sendMenu';
    const value_submit = 'Desar';

    const fn_actualitzarMenu = (event) => {
        const bttn = document.getElementById(event.currentTarget.id);
        bttn.setAttribute('style', 'background: #9cf; opacity: 0.8;');
        bttn.setAttribute('disabled', 'true');
        const article = document.getElementById('id_article_titol_menus');
        const articlePreu = document.getElementById('id_article_bttn_span_menus');
        const h2 = document.getElementsByClassName('cn-h2-titol-menus')[0];
        const spanPreu = document.getElementsByClassName('cn-span-menu-preu-menus')[0];
        h2.style.display = 'none';
        spanPreu.style.display = 'none';
        /* dynamic elements */
        const input = document.createElement('input');
        input.className = 'cn-dynamic-input-titol-menus';
        input.id = 'id_dynamic_input_titol_menus';
        input.name = 'updateTitolMenu';
        input.placeholder = 'Nou títol del menu...';
        article.appendChild(input);
        const span = document.createElement('input');
        span.className = 'cn-dynamic-input-preu-menus';
        span.id = 'id_dynamic_input_preu_menus';
        span.name = 'updatePreuMenu';
        span.placeholder = 'Nou preu...';
        span.type = 'number';
        articlePreu.appendChild(span);
        const div_apat = document.getElementsByClassName('cn-div-nom-bttn-article-menus');
        const div_apat_nom_primer = document.getElementsByClassName('cn-primer-div-nom-article-menus');
        const div_apat_nom_segon = document.getElementsByClassName('cn-segon-div-nom-article-menus');
        const div_apat_nom_tercer = document.getElementsByClassName('cn-postres-div-nom-article-menus');
        const bttn_remove_article = document.getElementsByClassName('cn-bttn-remove-article-menus');
        const section_llista = document.getElementById('id_section_llista_menus');
        const bttn_desar = document.getElementById('id_submit_form_final_menus');
        /*for (let i = 0; i < div_apat.length; i++) {
            div_apat[i].setAttribute('style', 'justify-content: space-between;');
        }
        for (let i = 0; i < div_apat_nom_primer.length; i++) {
            div_apat_nom_primer[i].setAttribute('style', 'width: 50%;');
        }
        for (let i = 0; i < div_apat_nom_segon.length; i++) {
            div_apat_nom_segon[i].setAttribute('style', 'width: 50%;');
        }
        for (let i = 0; i < div_apat_nom_tercer.length; i++) {
            div_apat_nom_tercer[i].setAttribute('style', 'width: 50%;');
        }
        for (let i = 0; i < bttn_remove_article.length; i++) {
            bttn_remove_article[i].setAttribute('style', 'display: flex;');
        }*/
        section_llista.setAttribute('style', 'display: flex;');
        bttn_desar.setAttribute('style', 'display: flex;');
    }

    const guardarMenu = async () => {
        const bttn = document.getElementById('id_bttn_update_square_menus');
        bttn.removeAttribute('style');
        bttn.removeAttribute('disabled');
        const h2 = document.getElementsByClassName('cn-h2-titol-menus')[0];
        const spanPreu = document.getElementsByClassName('cn-span-menu-preu-menus')[0];
        let numPreu = parseInt(spanPreu.textContent.split('')[0]);
        if (document.getElementById('id_dynamic_input_titol_menus') !== null) {
            const txt = document.getElementById('id_dynamic_input_titol_menus').value.trim();
            if (txt !== '') {
                h2.textContent = txt;
            }
            h2.removeAttribute('style');
            const input = document.getElementById('id_dynamic_input_titol_menus');
            input.remove();
        }
        if (document.getElementById('id_dynamic_input_preu_menus') !== null) {
            const txt = document.getElementById('id_dynamic_input_preu_menus').value.trim();
            if (txt !== '') {
                spanPreu.textContent = txt + '€';
                numPreu = parseInt(txt)
            }
            spanPreu.removeAttribute('style');
            const span = document.getElementById('id_dynamic_input_preu_menus');
            span.remove();
        }
        const div_apat = document.getElementsByClassName('cn-div-nom-bttn-article-menus');
        const div_apat_nom_primer = document.getElementsByClassName('cn-primer-div-nom-article-menus');
        const div_apat_nom_segon = document.getElementsByClassName('cn-segon-div-nom-article-menus');
        const div_apat_nom_tercer = document.getElementsByClassName('cn-postres-div-nom-article-menus');
        const bttn_remove_article = document.getElementsByClassName('cn-bttn-remove-article-menus');
        const section_llista = document.getElementById('id_section_llista_menus');
        const bttn_desar = document.getElementById('id_submit_form_final_menus');
        /*for (let i = 0; i < div_apat.length; i++) {
            div_apat[i].setAttribute('style', 'justify-content: center;');
        }
        for (let i = 0; i < div_apat_nom_primer.length; i++) {
            div_apat_nom_primer[i].setAttribute('style', 'width: 100%;');
        }
        for (let i = 0; i < div_apat_nom_segon.length; i++) {
            div_apat_nom_segon[i].setAttribute('style', 'width: 100%;');
        }
        for (let i = 0; i < div_apat_nom_tercer.length; i++) {
            div_apat_nom_tercer[i].setAttribute('style', 'width: 100%;');
        }
        for (let i = 0; i < bttn_remove_article.length; i++) {
            bttn_remove_article[i].setAttribute('style', 'display: none;');
        }*/
        section_llista.removeAttribute('style');
        bttn_desar.removeAttribute('style');
        const llistaTotal = menuPrimer.concat(menuSegon).concat(menuPostres)
        /* Actualitzar Menu */
        const obj = {
            id: 1,
            nom: h2.textContent,
            preu: numPreu,
            actiu: 1
        }
        await actualitzarMenus(1, obj)
        await carregarMenus()

        /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ERROR AL RENDERITZAR FALTA ELIMINAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
        /* ================================================================================ ELIMINAR A- */
        /*for (let i = 0; i < menusIdApats.length; i++) {
            eliminarMenuApats(1, menusIdApats[i].apatId)
        }*/
        /*for (let i = 0; i < menusApats.apatsPerCategoria.PRIMER.length; i++) {
            eliminarMenuApats(1, menusApats.apatsPerCategoria.PRIMER[i].id)
        }
        for (let i = 0; i < menusApats.apatsPerCategoria.SEGON.length; i++) {
            eliminarMenuApats(1, menusApats.apatsPerCategoria.SEGON[i].id)
        }
        for (let i = 0; i < menusApats.apatsPerCategoria.POSTRE.length; i++) {
            eliminarMenuApats(1, menusApats.apatsPerCategoria.POSTRE[i].id)
        }*/
        /* ================================================================================ ELIMINAR -Z */
        /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ERROR AL RENDERITZAR FALTA ELIMINAR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

        /* ================================================================================ CREAR A- */
        for (let i = 0; i < llistaTotal.length; i++) {
            const newObject = {
                menuId: 1, //MALA PRACTICA
                apatId: llistaTotal[i].id
            }
            crearMenusApats(newObject);
        }
        /* ================================================================================ CREAR -Z */
    }

    const descativarMenu = () => {
        setMenuActivedDesactived(!menuActivedDesactived)
    }

    const ativarMenu = () => {
        setMenuActivedDesactived(!menuActivedDesactived)
    }

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_menus_carta' src={menus_carta} autoPlay loop muted></video>
                </section>
                {menus.map((menu) => (
                    <section key={menu.id} className='cn-section-total-menus'>
                        <article className='cn-article-titol-menus' id='id_article_titol_menus'>
                            <h2 className={'cn-h2-titol-menus'}>{menu.nom}</h2>
                            <button
                                className={className_bttn_update}
                                id={id_bttn_update}
                                name={name_bttn_update}
                                onClick={fn_actualitzarMenu}
                            >
                                <UpdateQuadrat />
                            </button>
                        </article>
                        <article className={'cn-article-bttn-span-menus'} id={'id_article_bttn_span_menus'}>
                            {menuActivedDesactived
                                ? <BotoActiu id={menu.id} desactivar={descativarMenu} />
                                : <BotoDesactiu id={menu.id} activar={ativarMenu} />}
                            <span className={className_span_menu_preu}>{menu.preu}€</span>
                        </article>
                        <ArticleMenus nomArticle={'Primer'} categoriaNom={'primer'} typeCategoria={1} llista={menuPrimer} removeLlista={removeMenuPrimer}/>
                        <ArticleMenus nomArticle={'Segon'} categoriaNom={'segon'} typeCategoria={2} llista={menuSegon} removeLlista={removeMenuSegon} />
                        <ArticleMenus nomArticle={'Postres'} categoriaNom={'postres'} typeCategoria={3} llista={menuPostres} removeLlista={removeMenuPostres} />
                        <LlistaMenus />
                        <input
                            id={id_submit}
                            name={name_submit}
                            value={value_submit}
                            onClick={guardarMenu}
                            type='submit'
                        />
                    </section>
                ))}
            </main>
            <Peu />
        </>
    )
  
}