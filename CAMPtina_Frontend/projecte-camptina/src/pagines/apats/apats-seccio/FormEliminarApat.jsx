import './FormEliminarApat.css'
import { useState, useEffect } from 'react'

export const FormEliminarApat = () => {

    const [esTancat, setEsTancat] = useState(false)

    const tancarFinestra = () => {
        setEsTancat(!esTancat);
    }

    useEffect(() => {
        if (esTancat) {
            const section = document.getElementById('id_section_form_eliminar_apat');
            const article = document.getElementById('id_form_eliminar_apat');
            article.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            const section = document.getElementById('id_section_form_eliminar_apat');
            const article = document.getElementById('id_form_eliminar_apat');
            article.removeAttribute('style');
            section.removeAttribute('style');
        }
    }, [esTancat])

    const className_section = 'cn-section-form-eliminar-apat';
    const id_section = 'id_section_form_eliminar_apat'
    const className_article_nom = 'cn-article-nom-form-eliminar-apat';
    const className_h3_nom = 'cn-h3-nom-form-eliminar-apat';
    const nomSeccio = 'Eliminació d\'un àpat';

    const className_form = 'cn-form-eliminar-apat';
    const id_form = 'id_form_eliminar_apat';
    const method_form = 'post';
    const action_form = 'http://localhost:5173'; /* Cal modificar per passar les dades al servidor. */

    const className_div_contingut_form = 'cn-div-contingut-form-eliminar-apat';
    const className_div_bttn_form = 'cn-div-bttn-form-eliminar-apat';

    const className_input_txt = 'cn-input-txt-form-eliminar-apat';
    const id_input_txt = 'id_input_txt_form_eliminar_apat';
    const name_input_txt = 'idApat';
    const txtInputIDApat = 'ID de l\'àpat a eliminar:';

    const id_reset = 'id_reset_form_eliminar_apat';
    const name_reset = 'resetejarEliminarApat';
    const value_reset = 'Resetejar';

    const id_submit = 'id_submit_form_eliminar_apat';
    const name_submit = 'eliminarApat';
    const value_submit = 'Eliminar';

    const className_bttn_finestra = 'cn-bttn-finestra-form-eliminar-apat';
    const id_bttn_finestra = 'id_bttn_finestra_form_eliminar_apat';
    const name_bttn_finestra = 'finestraDeFormEliminar';
    //const txt_bttn_finestra = '✕';


    return (
        <>
            <section className={className_section} id={id_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                    <button
                        className={className_bttn_finestra}
                        id={id_bttn_finestra}
                        name={name_bttn_finestra}
                        onClick={tancarFinestra}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </article>
                <form className={className_form} id={id_form} method={method_form} action={action_form}>
                    <div className={className_div_contingut_form}>
                        <label htmlFor={id_input_txt}>{txtInputIDApat}</label>
                        <input
                            defaultValue={''}
                            className={className_input_txt}
                            id={id_input_txt}
                            name={name_input_txt}
                            type='text'
                            required
                        />
                    </div>
                    <div className={className_div_bttn_form}>
                        <input
                            id={id_reset}
                            name={name_reset}
                            value={value_reset}
                            type='reset'
                        />
                        <input
                            id={id_submit}
                            name={name_submit}
                            value={value_submit}
                            type='submit'
                        />
                    </div>
                </form>
            </section>
        </>
    )
}