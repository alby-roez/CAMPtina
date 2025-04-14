import './FormCrearUsuari.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useUsuaris } from './UsuarisContext.jsx'
import { ResetRoda } from '../../Icones.jsx'

export const FormCrearUsuari = () => {
    const { crearUsuari } = useUsuaris()
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

   /* const peticioCrearUsuari = handleSubmit((data) => {
        const nouUsuari = {
            nom: data.nomUsuari,
            cognom1: data.cognom1,
            cognom2: data.cognom2,
            nom: data.nomUsuari,
            rolId: parseInt(data.rolUsuari),
            email: data.emailUsuari
        };

        crearUsuari(nouUsuari); 
        reset();
        
    })*/

    const [esTancat, setEsTancat] = useState(false)

    const tancarFinestra = () => {
        setEsTancat(!esTancat);
    }

    useEffect(() => {
        if (esTancat) {
            const section = document.getElementById('id_section_form_crear_usuari');
            const article = document.getElementById('id_form_crear_usuari');
            article.setAttribute('style', 'display: none;');
            section.setAttribute('style', 'height: 70px');
        } else {
            const section = document.getElementById('id_section_form_crear_usuari');
            const article = document.getElementById('id_form_crear_usuari');
            article.removeAttribute('style');
            section.removeAttribute('style');
        }
    }, [esTancat])

    const className_section = 'cn-section-form-crear-usuari';
    const id_section = 'id_section_form_crear_usuari'
    const className_article_nom = 'cn-article-nom-form-crear-usuari';
    const className_h3_nom = 'cn-h3-nom-form-crear-usuari';
    const nomSeccio = 'Gestió d\'usuaris';

    const className_form = 'cn-form-crear-usuari';
    const id_form = 'id_form_crear_usuari';
    const method_form = 'POST';
    const action_form = 'http://localhost:5173'; /* Cal modificar per passar les dades al servidor. */

    const className_div_contingut_form = 'cn-div-contingut-form-crear-usuari';
    const className_div_txt_select_form = 'cn-div-txt-select-form-crear-usuari';
    const className_div_lbl_txt_form = 'cn-div-lbl-text-form-crear-usuari';
    const className_div_lbl_select_form = 'cn-div-lbl-select-form-crear-usuari';
    const className_div_txtarea_form = 'cn-div-txtarea-form-crear-usuari';
    const className_div_bttn_form = 'cn-div-bttn-form-crear-usuari';

    const className_input_txt = 'cn-input-txt-form-crear-usuari';
    const id_input_txt = 'id_input_txt_form_crear_usuari';
    const name_input_txt = 'nomUsuari';
    const txtInputNomApat = 'Nom de l\'usuari:';

    const className_select = 'cn-select-form-crear-usuari';
    const id_select = 'id_select_form_crear_usuari';
    const name_select = 'rolUsuari';
    const txtSelectCategoriaApat = 'Rol de l\'usuari:';

    const valueGestor = 1;
    const valueTreballador = 2;
 
    const txtGestor = 'Gestor';
    const txtTreballador = 'Treballador';

    const className_txtarea = 'cn-txtarea-form-crear-usuari';
    const id_txtarea = 'id_txtarea_form_crear_usuari';
    const name_txtarea = 'cognomUsuari';
    const txtAreaCognom1 = 'Primer cognom de l\'usuari:';
    const txtareaRows = 3;
    const txtareaCols = 30;
    const preTxtarea = 'Primer cognom de l\'usuari';

    const id_reset = 'id_reset_form_crear_usuari';
    const name_reset = 'resetejarCrearUsuari';
    const value_reset = 'Resetejar';

    const id_submit = 'id_submit_form_crear_usuari';
    const name_submit = 'crearUsuari';
    const value_submit = 'Crear';

    const className_bttn_finestra = 'cn-bttn-finestra-form-crear-usuari';
    const id_bttn_finestra = 'id_bttn_finestra_form_crear_usuari';
    const name_bttn_finestra = 'finestraDeFormCrear';
    //const txt_bttn_finestra = '✕';

    const className_span = 'cn-span-error';

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
                <form className={className_form} id={id_form} onSubmit>
                    <div className={className_div_contingut_form}>
                        <div className={className_div_txt_select_form}>
                            <div className={className_div_lbl_txt_form}>
                                <label htmlFor={id_input_txt}>{txtInputNomApat}</label>
                                <input
                                    defaultValue={''}
                                    className={className_input_txt}
                                    id={id_input_txt}
                                    name={name_input_txt}
                                    type='text'
                                    { ... register('nomUsuari', {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 50
                                    })}
                                />
                                { errors.nomDeApat?.type === 'required' &&
                                <span className={className_span}>El nom és obligatori</span> }
                                { errors.nomDeApat?.type === 'minLength' &&
                                <span className={className_span}>Mínim 3 caràcters</span> }
                                { errors.nomDeApat?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 50 caràcters</span> }
                            </div>
                            <div className={className_div_lbl_select_form}>
                                <label htmlFor={id_select}>{txtSelectCategoriaApat}</label>
                                <select defaultValue={''} className={className_select} id={id_select} name={name_select}
                                { ... register('rolUsuari', {
                                    required: true
                                })}>
                                    <option value='' disabled></option>
                                    <option value={valueGestor}>{txtGestor}</option>
                                    <option value={valueTreballador}>{txtTreballador}</option>
                                </select>
                                { errors.rolUsuari?.type === 'required' &&
                                <span className={className_span}>Has de seleccionar un rol</span> }
                            </div>
                        </div>
                        <div className={className_div_txtarea_form}>
                            <label htmlFor={id_txtarea}>{txtAreaCognom1}</label>
                            <textarea
                                defaultValue={''}
                                className={className_txtarea}
                                id={id_txtarea}
                                name={name_txtarea}
                                placeholder={preTxtarea}
                                rows={txtareaRows}
                                cols={txtareaCols}
                                { ... register('cognom1', {
                                    required: true,
                                    minLength: 5,
                                    maxLength: 100
                                })}
                            />
                            { errors.descripcioDeApat?.type === 'required' &&
                                <span className={className_span}>El primer cognom és obligatori</span> }
                                { errors.descripcioDeApat?.type === 'minLength' &&
                                <span className={className_span}>Mínim 5 caràcters</span> }
                                { errors.descripcioDeApat?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 100 caràcters</span> }
                        </div>
                    </div>
                    <div className={className_div_bttn_form}>
                        <button
                            id={id_reset}
                            name={name_reset}
                        >
                            <ResetRoda />
                        </button>
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

/*
    <input
        id={id_reset}
        name={name_reset}
        value={value_reset}
        type='reset'
    />
 */