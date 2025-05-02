import { useMenus } from '../menus-seccio/LogicaMenus.js'
//import { ArticleTriarApat } from './ArticleTriarApat.jsx'
import './SeccioTriarApat.css'
import './ArticleTriarApat.css'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { DadesCamptinaContext } from '../../../services/DadesCamptina.jsx'

export const SeccioTriarApat = () => {

    const { torns, crearReserva, menus, carregarMenusComplet } = useContext(DadesCamptinaContext);

    const { menuPrimer, menuSegon, menuPostres } = useMenus()

    const { handleSubmit, reset, register, formState: { errors } } = useForm()

    const usuariGuardat = localStorage.getItem('dadesUsuari');
    const [idMenuSeleccionat, setIdMenuSeleccionat] = useState('');
    const [menuComplet, setMenuComplet] = useState({ primer: [], segon: [], postres: [] });

    const dadesUsuari = usuariGuardat ? JSON.parse(usuariGuardat) : null;


    const ferReserva = handleSubmit((data) => {
        console.log(usuariGuardat);
        const obj = {
            idUsuari: JSON.parse(dadesUsuari.id),
            id: data.tornTriarApat,
            idMenu: data.idMenu,
            idPrimer: data.idPrimer,
            idSegon: data.idSegon,
            idPostre: data.idPostres,
            idTorn: data.tornTriarApat,
            data: new Date().toISOString().split('T')[0]
        }
        console.log(obj);
        crearReserva(obj)
        reset();
    })
    useEffect(() => {
        if (idMenuSeleccionat) {
            carregarMenusComplet(idMenuSeleccionat).then(res => {
                setMenuComplet(res || { primer: [], segon: [], postres: [] });
            })
                .catch(err => {
                    console.error('Error carregant el menú complet', err);
                    setMenuComplet({ primer: [], segon: [], postres: [] });
                });
        }
    }, [idMenuSeleccionat]);

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
            {/* Selecció de menú */}
            <article className="cn-article-triar-apat">
                <div className="cn-div-nom-triar-apat">
                    <h3 className="cn-h3-nom-triar-apat">Menú</h3>
                </div>
                <select
                    className="cn-select-torns-triar-apat"
                    {...register('idMenu', { required: true })}
                    onChange={(e) => {
                        const id = e.target.value;
                        carregarMenusComplet(id);
                    }}
                >
                    <option value="" disabled>Selecciona un menú</option>
                    {menus.map(menu => (
                        <option key={menu.id} value={menu.id}>{menu.nom}:  {menu.preu}€</option>
                    ))}
                </select>
                {errors.idMenu && <span className="cn-span-error-message-torn-triar-apat">Has de seleccionar un menú</span>}
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
                    {...register('tornTriarApat', {
                        required: true
                    })}
                >
                    <option value='' disabled></option>
                    {torns.map((item) => (
                        <option key={item.id} value={item.id}>{item.nom} - {item.horaInici} - {item.horaFi}</option>
                    ))}
                </select>
                {errors.tornTriarApat?.type === 'required' &&
                    <span className={className_span_error}>Has de seleccionar un torn</span>}
            </article>
            {/* PRIMER */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Primer'}</h3>
                </div>
                {menuPrimer.length > 0 && menuPrimer.map(apat => (
                    <div key={apat.id} className={className_div_nom_apat}>
                        <label>{apat.nom}</label>
                        <input
                            type="radio"
                            value={apat.id}
                            {...register('idPrimer', { required: true })}
                        />
                    </div>
                ))}

                { /* MALA PARACTICA PER PROBAR SPAN (===) Switch (!==) */ true === false &&
                    <span className={className_span_error_special_radio}>Has de seleccionar un primer</span>}
            </article>
            {/* SEGON */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Segon'}</h3>
                </div>
                {menuSegon.length > 0 && menuSegon.map(apat => (
                    <div key={apat.id} className={className_div_nom_apat}>
                        <label>{apat.nom}</label>
                        <input
                            type="radio"
                            value={apat.id}
                            {...register('idSegon', { required: true })}
                        />
                    </div>
                ))}
                { /* MALA PARACTICA PER PROBAR SPAN (===) Switch (!==) */ true === false &&
                    <span className={className_span_error_special_radio}>Has de seleccionar un segon</span>}
            </article>
            {/* POSTRES */}
            <article className={className_article}>
                <div className={className_div_nom}>
                    <h3 className={className_h3_nom}>{'Postres'}</h3>
                </div>
                {menuPostres.length > 0 && menuPostres.map(apat => (
                    <div key={apat.id} className={className_div_nom_apat}>
                        <label>{apat.nom}</label>
                        <input
                            type="radio"
                            value={apat.id}
                            {...register('idPostres', { required: true })}
                        />
                    </div>
                ))}
                { /* MALA PARACTICA PER PROBAR SPAN (===) Switch (!==) */ true === false &&
                    <span className={className_span_error_special_radio}>Has de seleccionar un postres</span>}
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