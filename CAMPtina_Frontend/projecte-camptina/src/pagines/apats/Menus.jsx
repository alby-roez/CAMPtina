import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import menus_carta from '../../assets/menus_carta.mp4'
import { ArticleMenus } from './menus-seccio/ArticleMenus.jsx'
import { LlistaMenus } from './menus-seccio/LlistaMenus.jsx'
import { UpdateQuadrat } from '../../Icones.jsx'
//import { useApats } from '../ApatsContext.jsx'
import './Menus.css'

export default function Menus() {
    //const { apats } = useApats()

    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const className_bttn_update = 'cn-bttn-update-square-menus';
    const id_bttn_update = 'id_bttn_update_square_menus';
    const name_bttn_update = 'updateMenu';

    const id_submit = 'id_submit_form_final_menus';
    const name_submit = 'sendMenu';
    const value_submit = 'Desar';

    const actualitzarMenu = (event) => {
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
    }

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_menus_carta' src={menus_carta} autoPlay loop muted></video>
                </section>
                <section className='cn-section-total-menus'>
                    <article className='cn-article-titol-menus' id='id_article_titol_menus'>
                        <h2 className={'cn-h2-titol-menus'}>{'MENU'}</h2>
                        <button
                            className={className_bttn_update}
                            id={id_bttn_update}
                            name={name_bttn_update}
                            onClick={actualitzarMenu}
                        >
                            <UpdateQuadrat />
                        </button>
                    </article>
                    <ArticleMenus nomArticle={'Primer'} categoriaNom={'primer'} typeCategoria={1} />
                    <ArticleMenus nomArticle={'Segon'} categoriaNom={'segon'} typeCategoria={2} />
                    <ArticleMenus nomArticle={'Postres'} categoriaNom={'postres'} typeCategoria={3} />
                    <LlistaMenus />
                    <input
                        id={id_submit}
                        name={name_submit}
                        value={value_submit}
                        onClick={guardarMenu}
                        type='submit'
                    />
                </section>
            </main>
            <Peu />
        </>
    )
  
}