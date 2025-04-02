import './contacte/Contacte.css'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navegacio } from '../header/Navegacio.jsx'
import { Peu } from '../footer/Peu.jsx'
import { Link } from '../Link.jsx'
import contacte from '../assets/contacte.mp4'

export default function Contacte() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    
    const enviarContacte = handleSubmit((data) => {
        console.log(data) //Què fem amb les dades?
        reset();
    })

    const myCheckboxContacte = document.getElementById('id_form_checkbox_contacte');
    const mySubmitContacte = document.getElementById('id_submit_contacte');

    const changeTermsConditions = () => {
        if (myCheckboxContacte !== null) {
            myCheckboxContacte.checked ? mySubmitContacte.disabled = false : mySubmitContacte.disabled = true
        }
    }

    const [agreeTC, setAgreeTC] = useState(false)

    const marcarCasella = () => {
        setAgreeTC(!agreeTC);
    }

    useEffect(() => {
        changeTermsConditions()
    }, [agreeTC])

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_contacte' src={contacte} autoPlay loop muted></video>
                </section>
                <section className='cn-section-contacte'>
                    <article className='cn-article-titol-contacte'>
                        <h1>Contacte</h1>
                    </article>
                    <article className='cn-article-form-contacte'>
                        <form className='cn-form-contacte' id='id_form_contacte' onSubmit={enviarContacte}>
                            <div className='cn-form-div-input-contacte'>
                                <div className='cn-form-div-nom-contacte'>
                                    <label htmlFor='id_form_nom_contacte'>Nom</label>
                                    <input
                                        defaultValue={''}
                                        className='cn-form-nom-contacte'
                                        id='id_form_nom_contacte'
                                        name='nomContacte'
                                        type='text'
                                        { ... register('nomDeUsuari', {
                                            required: true
                                        })}
                                    />
                                    { errors.nomDeUsuari?.type === 'required' &&
                                        <span className='cn-form-span-contacte'>El nom és requerit</span> }
                                </div>
                                <div className='cn-form-div-email-contacte'>
                                    <label htmlFor='id_form_email_contacte'>Correu electrònic</label>
                                    <input
                                        defaultValue={''}
                                        className='cn-form-email-contacte'
                                        id='id_form_email_contacte'
                                        name='emailContacte'
                                        type='email'
                                        { ... register('emailDeUsuari', {
                                            required: true
                                        })}
                                    />
                                    { errors.emailDeUsuari?.type === 'required' &&
                                        <span className='cn-form-span-contacte'>El correu electrònic és requerit</span> }
                                </div>
                                <div className='cn-form-div-missatge-contacte'>
                                    <label htmlFor='id_form_missatge_contacte'>Missatge</label>
                                    <textarea
                                        defaultValue={''}
                                        className='cn-form-missatge-contacte'
                                        id='id_form_missatge_contacte'
                                        name='missatgeContacte'
                                        placeholder='Que ens vols dir...'
                                        rows='10'
                                        cols='100'
                                        { ... register('missatgeDeUsuari', {
                                            required: true,
                                            maxLength: 1000
                                        })}
                                    />
                                    { errors.missatgeDeUsuari?.type === 'required' &&
                                        <span className='cn-form-span-contacte'>La descripció és requerida</span> }
                                    { errors.missatgeDeUsuari?.type === 'maxLength' && 
                                        <span className='cn-form-span-contacte'>Max 1000</span> }
                                </div>
                                <div className='cn-form-div-checkbox-contacte'>
                                    <div className='cn-form-div-input-lbl-checkbox-contacte'>
                                        <input
                                            className='cn-form-checkbox-contacte'
                                            id='id_form_checkbox_contacte'
                                            name='checkboxContacte'
                                            value='acceptar'
                                            type='checkbox'
                                            { ... register('checkboxDeUsuari', {
                                                required: true
                                            })}
                                            onChange={marcarCasella}
                                        />
                                        <label htmlFor='id_form_checkbox_contacte'>He llegit i accepto les condicions contingudes a la política de privadesa sobre el tractament de les meves dades per gestionar la meva consulta o petició.</label>
                                    </div>
                                    <Link to='/terms-and-conditions' target='_blank'>Llegeix els nostres Termes i Condicions</Link>
                                    { errors.checkboxDeUsuari?.type === 'required' &&
                                        <span className='cn-form-span-contacte'>La casella és requerida</span> }
                                </div>
                            </div>
                            <input
                                id='id_submit_contacte'
                                name='submitContacte'
                                value='Enviar'
                                type='submit'
                                disabled
                            />
                        </form>
                        <div className='info-contact'>
                            <h3>Ens posarem en contacte amb tu el més aviat possible.</h3>
                            <p>CAMPtina</p>
                            <p>info@camptina.es</p>
                        </div>
                    </article>
                </section>
            </main>
            <Peu />
        </>
    )
}