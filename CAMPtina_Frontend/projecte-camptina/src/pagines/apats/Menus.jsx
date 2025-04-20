import { useState, useEffect } from 'react'
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
import { useAxiosPeticionsApats } from '../../services/AxiosPeticionsApats.js'
import { BotoActiu, BotoDesactiu } from './menus-seccio/BotonsMenus.jsx'

export default function Menus() {
    const { menus, carregarMenus, crearMenus, actualitzarMenu, eliminarMenu } = useAxiosPeticionsMenus()
    const { menusApats, crearMenusApats, carregarMenusApats  } = useAxiosPeticionsMenusApats()
    const { apats, carregarApats } = useAxiosPeticionsApats()
    const { menuPrimer, menuSegon, menuPostres, setMenuPrimer, setMenuSegon, setMenuPostres, addMenuPrimer, addMenuSegon, addMenuPostres } = useMenus()

    useEffect(() => {
        carregarMenus()
        //carregarApats()
        //carregarMenusApats()
        //console.log(menus)
    }, [])

    const [menuActivedDesactived, setMenuActivedDesactived] = useState(true)

    const [keyPrimer, setKeyPrimer] = useState(1)
    const [keySegon, setKeySegon] = useState(6)
    const [keyPostres, setKeyPostres] = useState(11)

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
        bttn.setAttribute('style', 'background: #08f; opacity: 0.8;');
        bttn.setAttribute('disabled', 'true');
        const article = document.getElementById('id_article_titol_menus');
        const h2 = document.getElementsByClassName('cn-h2-titol-menus')[0];
        h2.style.display = 'none';
        const input = document.createElement('input');
        input.className = 'cn-dynamic-input-titol-menus';
        input.id = 'id_dynamic_input_titol_menus';
        input.name = 'updateTitolMenu';
        input.placeholder = 'Nou títol del menu...';
        article.appendChild(input);
        const div_apat = document.getElementsByClassName('cn-div-nom-bttn-article-menus');
        const div_apat_nom_primer = document.getElementsByClassName('cn-primer-div-nom-article-menus');
        const div_apat_nom_segon = document.getElementsByClassName('cn-segon-div-nom-article-menus');
        const div_apat_nom_tercer = document.getElementsByClassName('cn-postres-div-nom-article-menus');
        const bttn_remove_article = document.getElementsByClassName('cn-bttn-remove-article-menus');
        const section_llista = document.getElementById('id_section_llista_menus');
        const bttn_desar = document.getElementById('id_submit_form_final_menus');
        for (let i = 0; i < div_apat.length; i++) {
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
        }
        section_llista.setAttribute('style', 'display: flex;');
        bttn_desar.setAttribute('style', 'display: flex;');
    }

    const guardarMenu = () => {
        const bttn = document.getElementById('id_bttn_update_square_menus');
        bttn.removeAttribute('style');
        bttn.removeAttribute('disabled');
        const h2 = document.getElementsByClassName('cn-h2-titol-menus')[0];
        if (document.getElementById('id_dynamic_input_titol_menus') !== null) {
            const txt = document.getElementById('id_dynamic_input_titol_menus').value.trim();
            if (txt !== '') {
                h2.textContent = txt;
            }
            h2.removeAttribute('style');
            const input = document.getElementById('id_dynamic_input_titol_menus');
            input.remove();
        }
        const div_apat = document.getElementsByClassName('cn-div-nom-bttn-article-menus');
        const div_apat_nom_primer = document.getElementsByClassName('cn-primer-div-nom-article-menus');
        const div_apat_nom_segon = document.getElementsByClassName('cn-segon-div-nom-article-menus');
        const div_apat_nom_tercer = document.getElementsByClassName('cn-postres-div-nom-article-menus');
        const bttn_remove_article = document.getElementsByClassName('cn-bttn-remove-article-menus');
        const section_llista = document.getElementById('id_section_llista_menus');
        const bttn_desar = document.getElementById('id_submit_form_final_menus');
        for (let i = 0; i < div_apat.length; i++) {
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
        }
        section_llista.removeAttribute('style');
        bttn_desar.removeAttribute('style');
        const llistaTotal = menuPrimer.concat(menuSegon).concat(menuPostres)
        for (let i = 0; i < llistaTotal.length; i++) {
            const newObject = {
                menuId: 1,
                apatId: llistaTotal[i].id
            }
            crearMenusApats(newObject);
        }
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
                        <article className={'cn-article-bttn-span-menus'}>
                            {menuActivedDesactived
                                ? <BotoActiu id={menu.id} desactivar={descativarMenu} />
                                : <BotoDesactiu id={menu.id} activar={ativarMenu} />}
                            <span className={className_span_menu_preu}>{menu.preu}€</span>
                        </article>
                        <ArticleMenus nomArticle={'Primer'} categoriaNom={'primer'} typeCategoria={1} llista={menuPrimer} setLlista={setMenuPrimer} addLlista={addMenuPrimer} />
                        <ArticleMenus nomArticle={'Segon'} categoriaNom={'segon'} typeCategoria={2} llista={menuSegon} setLlista={setMenuSegon} addLlista={addMenuSegon} />
                        <ArticleMenus nomArticle={'Postres'} categoriaNom={'postres'} typeCategoria={3} llista={menuPostres} setLlista={setMenuPostres} addLlista={addMenuPostres} />
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