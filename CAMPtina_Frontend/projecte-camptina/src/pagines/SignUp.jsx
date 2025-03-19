import { useState, useEffect } from 'react';
import { Link } from '../Link'
import logo_dark from '../assets/user_dark.png'

export default function SignUp() {

    const myCheckbox = document.getElementById('id_checkbox_login');
    const mySubmit = document.getElementById('id_access_login');

    const changeTermsConditions = () => {
        if (myCheckbox !== null) {
            myCheckbox.checked ? mySubmit.disabled = false : mySubmit.disabled = true
        }
    }

    const [agreeTC, setAgreeTC] = useState(false)

    const changeAgreeTC = () => {
        setAgreeTC(!agreeTC);
    }

    useEffect(() => {
        changeTermsConditions()
        console.log('Hola')
    }, [agreeTC])

    const className_main = 'cn-main-signup';

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

    const className_checkbox_divs = 'cn-checkbox-divs-login';

    const className_checkbox = 'cn-checkbox-login';
    const id_checkbox = 'id_checkbox_login';
    const name_checkbox = 'nameTermsConditions';
    const value_checkbox = 'accept';

    const txt_checkbox = 'I agree to the terms and conditions';
    const a_checkbox = 'Read our Terms and Conditions';

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

    return (
        <>
            <main className={className_main}>
                <section className={className_section}>
                    <article>
                        <form className='cn-form-signup' id='id_form_signup' method='post' action=''>
                            <fieldset>
                                <legend>Personal data</legend>
                                <div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_name_signup'>Name</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_name_signup'
                                            name='nameName'
                                            type='text'
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_surname_signup'>Surname</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_surname_signup'
                                            name='nameSurname'
                                            type='text'
                                            required
                                        />
                                    </div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_lastname_signup'>Last Name</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_lastname_signup'
                                            name='nameLastname'
                                            type='text'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_dni_signup'>DNI</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_dni_signup'
                                            name='nameDni'
                                            type='text'
                                            required
                                        />
                                    </div>
                                    <div className='cn-divs-lbl-select-signup'>
                                        <label htmlFor='id_select_sex_signup'>Sex</label>
                                        <select className='cn-select-signup' id='id_select_sex_signup' name='nameSex'>
                                            <option value={0}></option>
                                            <option value={1}>Male</option>
                                            <option value={2}>Female</option>
                                            <option value={3}>Other</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Contact information</legend>
                                <div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_email_signup'>Email</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_email_signup'
                                            name='nameEmail'
                                            type='email'
                                            required
                                        />
                                    </div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_telephone_signup'>Telephone</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_telephone_signup'
                                            name='nameTelephone'
                                            type='tel'
                                            required
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Location</legend>
                                <div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_street_signup'>Street</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_street_signup'
                                            name='nameStreet'
                                            type='text'
                                            required
                                        />
                                    </div>
                                    <div className='cn-divs-lbl-input-short-signup'>
                                        <div className='cn-divs-lbl-input-signup'>
                                            <label htmlFor='id_input_num_signup'>Number</label>
                                            <input
                                                className='cn-inputs-short-signup'
                                                id='id_input_num_signup'
                                                name='nameNum'
                                                type='text'
                                            />
                                        </div>
                                        <div className='cn-divs-lbl-input-signup'>
                                            <label htmlFor='id_input_stairs_signup'>Stairs</label>
                                            <input
                                                className='cn-inputs-short-signup'
                                                id='id_input_stairs_signup'
                                                name='nameStairs'
                                                type='text'
                                            />
                                        </div>
                                        <div className='cn-divs-lbl-input-signup'>
                                            <label htmlFor='id_input_floor_signup'>Floor</label>
                                            <input
                                                className='cn-inputs-short-signup'
                                                id='id_input_floor_signup'
                                                name='nameFloor'
                                                type='text'
                                            />
                                        </div>
                                        <div className='cn-divs-lbl-input-signup'>
                                            <label htmlFor='id_input_door_signup'>Door</label>
                                            <input
                                                className='cn-inputs-short-signup'
                                                id='id_input_door_signup'
                                                name='nameDoor'
                                                type='text'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='cn-divs-lbl-select-signup'>
                                        <label htmlFor='id_select_country_signup'>Country</label>
                                        <select className='cn-select-signup' id='id_select_country_signup' name='nameCountry' required>
                                            <option value={0}></option>
                                            <option value={1}>Spain</option>
                                            <option value={2}>EEUU</option>
                                            <option value={3}>Kenia</option>
                                        </select>
                                    </div>
                                    <div className='cn-divs-lbl-select-signup'>
                                        <label htmlFor='id_select_province_signup'>Province</label>
                                        <select className='cn-select-signup' id='id_select_province_signup' name='nameProvince' required>
                                            <option value={0}></option>
                                            <option value={1}>Barcelona</option>
                                            <option value={2}>Girona</option>
                                            <option value={3}>Lleida</option>
                                            <option value={4}>Tarragona</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <div className='cn-divs-lbl-select-signup'>
                                        <label htmlFor='id_select_municipality_signup'>Municipality</label>
                                        <select className='cn-select-signup' id='id_select_municipality_signup' name='nameMunicipality' required>
                                            <option value={0}></option>
                                            <option value={1}>Barcelona</option>
                                            <option value={2}>-----</option>
                                            <option value={3}>-----</option>
                                            <option value={4}>-----</option>
                                        </select>
                                    </div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_zipcode_signup'>Zip Code</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_zipcode_signup'
                                            name='nameZipcode'
                                            type='text'
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Additional information</legend>
                                <div>
                                    <div className='cn-divs-lbl-textarea-signup'>
                                        <label htmlFor='id_textarea_infoadd_signup'>Brief description</label>
                                        <textarea className='cn-textarea-signup' id='id_textarea_infoadd_signup' name='nameInfoadd'>

                                        </textarea>
                                    </div>
                                    <div className='cn-divs-lbl-input-signup'>
                                        <label htmlFor='id_input_tastes_signup'>Tastes</label>
                                        <input
                                            className='cn-inputs-signup'
                                            id='id_input_tastes_signup'
                                            name='nameTastes'
                                            type='text'
                                        />
                                    </div>
                                </div>
                            </fieldset>
                            <input
                                id='id_bttn_submit_signup'
                                name='nameSubmitSignup'
                                type='submit'
                                value='Create an account'
                            />
                        </form>
                    </article>









                    <article className={className_article_main}>
                        <img className={className_img} src={logo_dark} alt='Logo'/>
                        <h3>{title_form}</h3>
                        <form className={className_form} id={id_form} method={method_form} action={action_form}>
                            <div>
                                <label htmlFor={id_input_user}>{txt_label_user}</label>
                                <input
                                    className={className_inputs}
                                    id={id_input_user}
                                    name={name_input_user}
                                    type='text'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={id_input_password}>{txt_label_password}</label>
                                <input
                                    className={className_inputs}
                                    id={id_input_password}
                                    name={name_input_password}
                                    type='password'
                                    required
                                /> 
                            </div>
                            <div>
                                <div className={className_checkbox_divs}>
                                    <input
                                        className={className_checkbox}
                                        id={id_checkbox}
                                        name={name_checkbox}
                                        value={value_checkbox}
                                        type='checkbox'
                                        onChange={changeAgreeTC}
                                    />
                                    <label htmlFor={id_checkbox}>{txt_checkbox}</label>
                                </div>
                                <Link to='/terms-and-conditions' target='_blank'>{a_checkbox}</Link>
                            </div>
                            <input
                                id={id_bttn_submit}
                                type='submit'
                                value={value_bttn_submit}
                                disabled
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
            </main>
        </>
    )
  
}