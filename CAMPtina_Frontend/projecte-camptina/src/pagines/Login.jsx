import { Link } from '../Link'
import logo_dark from '../assets/user_dark.png'
import { loginUsuari } from '../services/AxiosPeticioLogin';
import { useState } from 'react';
import { ESDEVENIMENTS } from '../consts.js'

export default function Login() {

    const [email, setEmaiLEntrat] = useState('')
    const [password, setPasswordEntrat] = useState('')
    const [error, setError] = useState('');

    const handleInputChangeEmail = (e) => {
        setEmaiLEntrat(e.target.value)
    }

    const handleInputChangePassword = (e) => {
        setPasswordEntrat(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const resposta = await loginUsuari(email, password);
        
        if (resposta.success) {
            // Guardem les dades de l'usuari a localStorage
            const dadesUsuari = {
                nom: resposta.nom,
                cognom1: resposta.cognom1,
                email: resposta.email,
                rol: resposta.rol,
                token: resposta.token

            }

            localStorage.setItem('usuari', JSON.stringify(dadesUsuari));
            console.log(dadesUsuari)
            
            // Redirigir a la pàgina principal
            window.history.pushState({}, '', '/')
            window.dispatchEvent(new Event(ESDEVENIMENTS.CAPENDAVANT));
        } else {
            setError(resposta.error);
        }
        
    }



    const className_main = 'cn-main-login';

    const className_section = 'cn-section-login';

    const className_article_main = 'cn-article-main-login';
    const className_article_footer = 'cn-article-footer-login';

    const className_img = 'cn-logo-login';
    const title_form = 'CAMPtina';

    const className_form = 'cn-form-login';
    const id_form = 'id_form_login';
    const method_form = 'post';
    const action_form = '';

    const className_inputs = 'cn-inputs-login';

    const txt_label_user = 'User';
    const txt_label_password = 'Password';

    const id_input_user = 'id_user_login';
    const name_input_user = 'nameUser';
    const id_input_password = 'id_password_login';
    const name_input_password = 'namePassword';

    const id_bttn_submit = 'id_access_login';
    const value_bttn_submit = 'Access';

    const className_span = 'span-form-login';

    const a_footer = 'Forgot your password?';
    const p_footer = 'Don\'t have an account?';
    const txt_signup = 'Sign Up';

    const className_div_a = 'cn-div-a-login';

    return (
        <>
            <main className={className_main}>
                <section className={className_section}>
                    <article className={className_article_main}>
                        <img className={className_img} src={logo_dark} alt='Logo'/>
                        <h3>{title_form}</h3>
                        <form className={className_form} id={id_form} method={method_form} action={action_form} onSubmit={handleSubmit}>
                        {error && <div className='error-message'>{error}</div>}
                            <div>
                                <label htmlFor={id_input_user}>{txt_label_user}</label>
                                <input
                                    className={className_inputs}
                                    id={id_input_user}
                                    name={name_input_user}
                                    type='text'
                                    value={email}
                                    onChange={handleInputChangeEmail}
                                    required
                                    autoFocus
                                />
                            </div>
                            <div>
                                <label htmlFor={id_input_password}>{txt_label_password}</label>
                                <input
                                    className={className_inputs}
                                    id={id_input_password}
                                    name={name_input_password}
                                    type='password'
                                    value={password}
                                    onChange={handleInputChangePassword}
                                    required
                                /> 
                            </div>
                            <input
                                id={id_bttn_submit}
                                type='submit'
                                value={value_bttn_submit}
                            />
                        </form>
                    </article>
                    <article className={className_article_footer}>
                        <Link to='/send-mail'>{a_footer}</Link>
                        <span className={className_span}></span>
                        <div>
                            <p>{p_footer}</p>
                            <Link to='/sign-up'>{txt_signup}</Link>
                        </div>
                    </article>
                </section>
                <div className={className_div_a}>
                    <Link to='/'>Tornar</Link>
                </div>
            </main>
        </>
    )
  
}