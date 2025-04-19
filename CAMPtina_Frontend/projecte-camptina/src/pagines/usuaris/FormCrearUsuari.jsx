import './FormCrearUsuari.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { CloseFinestra, ResetRoda } from '../../Icones.jsx'
import { useAxiosPeticionsRols } from '../../services/AxiosPeticionsRols.js'
import { useAxiosPeticionsUsuaris } from '../../services/AxiosPeticionsUsuaris.js'

export const FormCrearUsuari = () => {
    const { crearUsuari } = useAxiosPeticionsUsuaris()
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const peticioCrearUsuari = handleSubmit((data) => {
        const nouUsuari = {
            nom: data.nomUsuari,
            cognom1: data.cognom1Usuari,
            cognom2: data.cognom2Usuari,
            email: data.email,
            rolId: parseInt(data.rolUsuari),
            
        };

        crearUsuari(nouUsuari); 
        reset();
        
    })

    const { rols } = useAxiosPeticionsRols();

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

    const className_div_contingut_form = 'cn-div-contingut-form-crear-usuari';
    const className_div_txt_nom_complet_form = 'cn-div-txt-nom-complet-form-crear-usuari';
    const className_div_txt_email_rol_form = 'cn-div-txt-email-rol-form-crear-usuari';

    const className_div_lbl_txt_form = 'cn-div-lbl-text-form-crear-usuari';
    const className_div_lbl_select_form = 'cn-div-lbl-select-form-crear-usuari';

    const className_input_txt = 'cn-input-txt-form-crear-usuari';
    const className_div_bttn_form = 'cn-div-bttn-form-crear-usuari';

    const id_input_txt_nom = 'id_input_txt_form_crear_usuari';
    const name_input_txt = 'nomUsuari';
    const txtInputNomUsuari = 'Nom:';

    const id_input_txt_cognom1 = 'id_input_txt_cognom1_form_crear_usuari';
    const cognom1_input_txt = 'cognom1Usuari';
    const txtInputCognom1Usuari = 'Primer Cognom:';

    const id_input_txt_cognom2 = 'id_input_txt_cognom2_form_crear_usuari';
    const cognom2_input_txt = 'cognom2Usuari';
    const txtInputCognom2Usuari = 'Segon Cognom:';

    const id_input_txt_email = 'id_input_txt_email_form_crear_usuari';
    const email_input_txt = 'emailUsuari';
    const txtInputEmailUsuari = 'eMail:';

    const className_select = 'cn-select-form-crear-usuari';
    const id_select = 'id_select_form_crear_usuari';
    const name_select = 'rolUsuari';
    const txtSelectRolUsuari = 'Rol:';

    const id_reset = 'id_reset_form_crear_usuari';
    const name_reset = 'resetejarCrearUsuari';

    const id_submit = 'id_submit_form_crear_usuari';
    const name_submit = 'crearUsuari';
    const value_submit = 'Crear';

    const className_bttn_finestra = 'cn-bttn-finestra-form-crear-usuari';
    const id_bttn_finestra = 'id_bttn_finestra_form_crear_usuari';
    const name_bttn_finestra = 'finestraDeFormCrear';


    const className_span = 'cn-span-error-form-crear-usuari';

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
                        <CloseFinestra />
                    </button>
                </article>
                <form className={className_form} id={id_form} onSubmit={peticioCrearUsuari}>     {/*pendent afegir acció de onSubmit*/}
                    <div className={className_div_contingut_form}>
                        <div className={className_div_txt_nom_complet_form}>
                            <div className={className_div_lbl_txt_form}>
                                <div className='cn-div-container-txt-form-crear-usuari'>
                                    <label htmlFor={id_input_txt_nom}>{txtInputNomUsuari}</label>
                                    <input
                                        defaultValue={''}
                                        className={className_input_txt}
                                        id={id_input_txt_nom}
                                        name={name_input_txt}
                                        type='text'
                                        { ... register('nomUsuari', {
                                            required: true,
                                            minLength: 2,
                                            maxLength: 45
                                        })}
                                    />
                                </div>
                                { errors.nomUsuari?.type === 'required' &&
                                <span className={className_span}>El nom és obligatori</span> }
                                { errors.nomUsuari?.type === 'minLength' &&
                                <span className={className_span}>Mínim 2 caràcters</span> }
                                { errors.nomUsuari?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 45 caràcters</span> }
                            </div>
                            <div className={className_div_lbl_txt_form}>
                                <div className='cn-div-container-txt-form-crear-usuari'>
                                    <label htmlFor={id_input_txt_cognom1}>{txtInputCognom1Usuari}</label>
                                    <input
                                        defaultValue={''}
                                        className={className_input_txt}
                                        id={id_input_txt_cognom1}
                                        name={cognom1_input_txt}
                                        type='text'
                                        { ... register('cognom1Usuari', {
                                            required: true,
                                            minLength: 2,
                                            maxLength: 45
                                        })}
                                    />
                                </div>
                                { errors.cognom1Usuari?.type === 'required' &&
                                <span className={className_span}>El primer cognom és obligatori</span> }
                                { errors.cognom1Usuari?.type === 'minLength' &&
                                <span className={className_span}>Mínim 2 caràcters</span> }
                                { errors.cognom1Usuari?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 45 caràcters</span> }
                            </div>
                            <div className={className_div_lbl_txt_form}>
                                <div className='cn-div-container-txt-form-crear-usuari'>
                                    <label htmlFor={id_input_txt_cognom2}>{txtInputCognom2Usuari}</label>
                                    <input
                                        defaultValue={''}
                                        className={className_input_txt}
                                        id={id_input_txt_cognom2}
                                        name={cognom2_input_txt}
                                        type='text'
                                        { ... register('cognom2Usuari', {
                                            maxLength: 45
                                        })}
                                    />
                                </div>
                                { errors.cognom2Usuari?.type === 'maxLength' &&
                                <span className={className_span}>Màxim 45 caràcters</span> }
                            </div>
                        </div>
                        <div className={className_div_txt_email_rol_form}>
                            <div className={className_div_lbl_txt_form}>
                                <div className='cn-div-container-txt-form-crear-usuari'>
                                    <label htmlFor={id_input_txt_email}>{txtInputEmailUsuari}</label>
                                    <input
                                        defaultValue={''}
                                        className={className_input_txt}
                                        id={id_input_txt_email}
                                        name={email_input_txt}
                                        type="email"
                                        { ...register('email', {
                                            required: true,
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Format de correu no vàlid'
                                            }
                                        })}
                                    />
                                </div>
                                { errors.email?.type === 'required' &&
                                <span className={className_span}>El correu és obligatori</span> }
                                { errors.email?.type === 'pattern' &&
                                <span className={className_span}>{errors.email.message}</span> }
                            </div>
                            <div className={className_div_lbl_select_form}>
                                <div className='cn-div-container-txt-form-crear-usuari'>
                                    <label htmlFor={id_select}>{txtSelectRolUsuari}</label>
                                    <select defaultValue={''} className={className_select} id={id_select} name={name_select}
                                    { ... register('rolUsuari', {
                                        required: true
                                    })}>
                                        <option value='' disabled></option>
                                        {rols.map((rol) => (
                                            <option key={rol.id} value={rol.id}>
                                                {rol.nom}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                { errors.rolUsuari?.type === 'required' &&
                                <span className={className_span}>El rol és obligatori</span> }
                            </div>
                        </div>
                    </div>
                    <div className={className_div_bttn_form}>
                        <button
                            id={id_reset}
                            name={name_reset}
                            type="button"
                            onClick={() => reset()}
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
