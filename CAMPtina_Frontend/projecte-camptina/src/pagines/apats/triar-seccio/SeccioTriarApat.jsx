import { useMenus } from '../menus-seccio/LogicaMenus.js'
//import { ArticleTriarApat } from './ArticleTriarApat.jsx'
import './SeccioTriarApat.css'
import './ArticleTriarApat.css'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { DadesCamptinaContext } from '../../../services/DadesCamptina.jsx'

export const SeccioTriarApat = () => {

    const { torns, crearReserva } = useContext(DadesCamptinaContext);
    const { menuPrimer, menuSegon, menuPostres} = useMenus()

    const { handleSubmit, reset, register, formState: {errors} } = useForm()

    const ferReserva = handleSubmit((data) => {
        console.log(data)
        /*const obj = {
            id_usuari: '',
            id_torn: data.tornTriarApat,
            id_menu: 1,
            id_primer: data.apatsPrimer,
            id_segon: data.apatsSegon,
            id_postres: data.apatsPostres,
            id_data: new Date()
        }
        crearReserva(obj)*/
        reset();
    })

    const className_form_seccio_triar_apat = 'cn-form-seccio-triar-apat';
    const className_article_titol_seccio_triar_apat = 'cn-article-titol-seccio-triar-apat';
    const id_article_titol_seccio_triar_apat = 'id_article_titol_seccio_triar_apat';
    const className_h2_titol_seccio_triar_apat = 'cn-h2-titol-seccio-triar-apat';

    const className_article = 'cn-article-triar-apat';
    const className_div_nom = 'cn-div-nom-triar-apat';
    const className_h3_nom = 'cn-h3-nom-triar-apat';
    const className_div_nom_apat = 'cn-div-nom-apat-triar-apat';

    /* ESTILS DE RADIO A- */
    const className_radio_input = 'cn-radio-input-triar-apat';
    //const className_radio_input_style = 'cn-radio-input-style-triar-apat';
    /* ESTILS DE RADIO -Z */

    const name_radio_input_primer = 'nameApatPrimer';
    const name_radio_input_segon = 'nameApatSegon';
    const name_radio_input_postres = 'nameApatPostres';
    //const className_span = 'cn-span-error-triar-apat';

    const txt_section = 'Selecció d\'àpats';
    const id_submit = 'id_submit_seccio_triar_apat';
    const name_submit = 'sendTriarApat';
    const value_submit = 'Reservar';

    const className_span_error = 'cn-span-error-message-torn-triar-apat';
    const className_span_error_special_radio = 'cn-span-error-special-radio-torn-triar-apat';

    return (
        <form className={className_form_seccio_triar_apat} onSubmit={ferReserva}>
            <article className={className_article_titol_seccio_triar_apat} id={id_article_titol_seccio_triar_apat}>
                <h2 className={className_h2_titol_seccio_triar_apat}>{txt_section}</h2>
            </article>
            {/* TORNS */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Torns'}</h3>
                </div>
                <select
                    defaultValue={''}
                    className='cn-select-torns-triar-apat'
                    id={'id_select_torns_triar_apat'}
                    name={'tornSelect'}
                    { ... register('tornTriarApat', {
                        required: true
                    })}
                >
                    <option value='' disabled></option>
                    {torns.map((item) => (
                        <option key={item.id} value={item.id}>{item.nom} - {item.horaInici} - {item.horaFi}</option>
                    ))}
                </select>
                { errors.tornTriarApat?.type === 'required' &&
                    <span className={className_span_error}>Has de seleccionar un torn</span> }
            </article>
            {/* PRIMER */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Primer'}</h3>
                </div>
                {menuPrimer.map((item) => (
                    <div key={item.id} className={className_div_nom_apat}>
                        <label htmlFor={`id_${item.id}_triar_apat`}>{item.nom}</label>
                        <input
                            type='radio'
                            className={className_radio_input}
                            id={`id_${item.id}_triar_apat`}
                            value={item.id}
                            name={name_radio_input_primer}
                            { ... register('apatsPrimer', {})}
                        />
                    </div>
                ))}
                { /* MALA PARACTICA PER PROBAR SPAN (===) Switch (!==) */ true === false &&
                    <span className={className_span_error_special_radio}>Has de seleccionar un primer</span> }
            </article>
            {/* SEGON */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Segon'}</h3>
                </div>
                {menuSegon.map((item) => (
                    <div key={item.id} className={className_div_nom_apat}>
                        <label htmlFor={`id_${item.id}_triar_apat`}>{item.nom}</label>
                        <input
                            type='radio'
                            className={className_radio_input}
                            id={`id_${item.id}_triar_apat`}
                            value={item.id}
                            name={name_radio_input_segon}
                            { ... register('apatsSegon')}
                        />
                    </div>
                ))}
                { /* MALA PARACTICA PER PROBAR SPAN (===) Switch (!==) */ true === false &&
                    <span className={className_span_error_special_radio}>Has de seleccionar un segon</span> }
            </article>
            {/* POSTRES */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Postres'}</h3>
                </div>
                {menuPostres.map((item) => (
                    <div key={item.id} className={className_div_nom_apat}>
                        <label htmlFor={`id_${item.id}_triar_apat`}>{item.nom}</label>
                        <input
                            type='radio'
                            className={className_radio_input}
                            id={`id_${item.id}_triar_apat`}
                            value={item.id}
                            name={name_radio_input_postres}
                            { ... register('apatsPostres')}
                        />
                    </div>
                ))}
                { /* MALA PARACTICA PER PROBAR SPAN (===) Switch (!==) */ true === false &&
                    <span className={className_span_error_special_radio}>Has de seleccionar un postres</span> }
            </article>
            {/*<ArticleTriarApat nomArticle={'Primer'} nomCategoria={'primer'} llista={menuPrimer} />*/}
            {/*<ArticleTriarApat nomArticle={'Segon'} nomCategoria={'segon'} llista={menuSegon} />*/}
            {/*<ArticleTriarApat nomArticle={'Postres'} nomCategoria={'postres'} llista={menuPostres} />*/}
            <input
                id={id_submit}
                name={name_submit}
                value={value_submit}
                type='submit'
            />
        </form>
    )
}