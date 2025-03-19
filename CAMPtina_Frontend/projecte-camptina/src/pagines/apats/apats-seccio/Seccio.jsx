import './Seccio.css'
import { useState } from 'react'
import { Link } from '../../../Link.jsx'

export const Seccio = ({ nomSeccio, srcImatge, camiA, txtA, id_check_gerent, id_check_usuari, mesGran, mesPetit, txtInfo }) => {

    const [esGerent, setEsGerent] = useState(false)
    const [esUsuari, setEsUsuari] = useState(false)

    const cambiarGerent = () => {
        setEsGerent(!esGerent);
    }

    const cambiarUsuari = () => {
        setEsUsuari(!esUsuari);
    }

    const manejarFuncioGran = () => {
        mesGran()
    }

    const manejarFuncioPetit = () => {
        mesPetit()
    }

    const className_section = 'cn-section-seccio';

    const className_article_nom = 'cn-article-nom-seccio';
    const className_article_contingut = 'cn-article-contingut-seccio';

    const className_h3_nom = 'cn-h3-nom-seccio';

    const className_div_contingut_interactiu = 'cn-div-contingut-interactiu-seccio';

    const className_subdiv_contingut_interactiu = 'cn-subdiv-contingut-interactiu-seccio';

    const className_div_checkbox = 'cn-div-checkbox-seccio';

    const className_checkbox = 'cn-checkbox-seccio';
    const name_checkbox_gerent = 'nomGerent';
    const value_checkbox_gerent = 'admin';
    const txt_checkbox_gerent = 'Gerent';
    const name_checkbox_usuari = 'nomUsuari';
    const value_checkbox_usuari = 'user';
    const txt_checkbox_usuari = 'Usuari';

    const className_img = 'cn-img-seccio';
    const img_alt = 'Imatge de secció';

    const className_div_contingut_info = 'cn-div-contingut-info-seccio';

    const bttn_mes = 'id_bttn_mes_seccio';
    const bttn_menys = 'id_bttn_menys_seccio';


    return (
        <>
            <section className={className_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                </article>
                <article className={className_article_contingut}>
                    <div className={className_div_contingut_interactiu}>
                        <Link to={camiA}><img className={className_img} src={srcImatge} alt={img_alt} /></Link>
                        <div className={className_subdiv_contingut_interactiu}>
                            <Link to={camiA}>{txtA}</Link>
                            <div className={className_div_checkbox}>
                                <input
                                    className={className_checkbox}
                                    id={id_check_gerent}
                                    name={name_checkbox_gerent}
                                    value={value_checkbox_gerent}
                                    type='checkbox'
                                    onChange={cambiarGerent}
                                />
                                <label htmlFor={id_check_gerent}>{txt_checkbox_gerent}</label>
                            </div>
                            <div className={className_div_checkbox}>
                                <input
                                    className={className_checkbox}
                                    id={id_check_usuari}
                                    name={name_checkbox_usuari}
                                    value={value_checkbox_usuari}
                                    type='checkbox'
                                    onChange={cambiarUsuari}
                                />
                                <label htmlFor={id_check_usuari}>{txt_checkbox_usuari}</label>
                            </div>
                        </div>
                    </div>
                    <div className={className_div_contingut_info}>
                        <h4>{txtInfo}</h4>
                        <div>
                            <button id={bttn_mes} onClick={manejarFuncioGran}>+</button>
                            <button id={bttn_menys} onClick={manejarFuncioPetit}>−</button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}