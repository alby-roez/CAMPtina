import './FormActualitzarApat.css'
import { useForm } from 'react-hook-form'
import { UpdateEnrere } from '../../../Icones'

export const FormActualitzarApat = ({ id }) => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const peticioActualitzarApat = handleSubmit((data) => {
        console.log(data)
    })

    const className_form_update = 'cn-form-update-llista-apats';
    const id_form_update = `id_${id}_form_update_llista_apats`;

    const className_form_div_inputs_update = 'cn-form-div-inputs-update-llista-apats';

    const className_form_div_inputs_nom_update = 'cn-form-div-inputs-nom-update-llista-apats';
    const className_form_div_inputs_categoria_update = 'cn-form-div-inputs-categoria-update-llista-apats';
    const className_form_div_inputs_descripcio_update = 'cn-form-div-inputs-descripcio-update-llista-apats';

    const className_input_nom_update = 'cn-input-nom-update-llista-apats';
    const id_input_nom_update = `id_${id}_input_nom_update_llista_apats`;
    const name_input_nom_update = 'actualitzarNom';

    const className_select_categoria_update = 'cn-select-categoria-update-llista-apats';
    const id_select_categoria_update = `id_${id}_select_categoria_update_llista_apats`;
    const name_select_categoria_update = 'actualitzarCategoria';

    const className_txtarea_descripcio_update = 'cn-txtarea-descripcio-update-llista-apats';
    const id_txtarea_descripcio_update = `id_${id}_txtarea_descripcio_update_llista_apats`;
    const name_txtarea_descripcio_update = 'actualitzarDescripcio';

    const valuePrimer = 1;
    const valueSegon = 2;
    const valuePostres = 3;

    const txtPrimer = 'Primer';
    const txtSegon = 'Segon';
    const txtPostres = 'Postres';

    const preTxtarea_update = 'Descriu l\'àpat...';
    const txtareaRows_update = 3;
    const txtareaCols_update = 30;

    const className_span_update = 'cn-span-update-llista-apats';

    const className_form_div_bttns_update = 'cn-form-div-bttns-update-llista-apats';

    const className_submit_update = 'cn-submit-update-llista-apats';
    const name_submit_update = 'confirmarUpdate';
    const value_submit_update = 'Actualitzar';

    const className_bttn_cancelar_update = 'cn-bttn-cancelar-update-llista-apats';
    const id_bttn_cancelar_update = `id_${id}_bttn_cancelar_update_llista_apats`;
    const name_bttn_cancelar_update = 'cancelarUpdate';

    return (
        <form className={className_form_update} id={id_form_update} onSubmit={peticioActualitzarApat}>
            <div className={className_form_div_inputs_update}>
                <div className={className_form_div_inputs_nom_update}>
                    <input
                        defaultValue={''}
                        className={className_input_nom_update}
                        id={id_input_nom_update}
                        name={name_input_nom_update}
                        placeholder='Nom'
                        type='text'
                        { ... register('nomDeApatUpdate', {
                            required: true
                        })}
                    />
                    { errors.nomDeApatUpdate?.type === 'required' &&
                        <span className={className_span_update}>El nom és requerit</span> }
                </div>
                <div className={className_form_div_inputs_categoria_update}>
                    <select
                        defaultValue={''}
                        className={className_select_categoria_update}
                        id={id_select_categoria_update}
                        name={name_select_categoria_update}
                        { ... register('categoriaDeApatUpdate', {
                            required: true
                        })}
                    >
                        <option value='' disabled>Categoria</option>
                        <option value={valuePrimer}>{txtPrimer}</option>
                        <option value={valueSegon}>{txtSegon}</option>
                        <option value={valuePostres}>{txtPostres}</option>
                    </select>
                    { errors.categoriaDeApatUpdate?.type === 'required' &&
                        <span className={className_span_update}>Escull categoria</span> }
                </div>
                <div className={className_form_div_inputs_descripcio_update}>
                    <textarea
                        defaultValue={''}
                        className={className_txtarea_descripcio_update}
                        id={id_txtarea_descripcio_update}
                        name={name_txtarea_descripcio_update}
                        placeholder={preTxtarea_update}
                        rows={txtareaRows_update}
                        cols={txtareaCols_update}
                        { ... register('descripcioDeApatUpdate', {
                            required: true,
                            maxLength: 1000
                        })}
                    />
                    { errors.descripcioDeApatUpdate?.type === 'required' &&
                        <span className={className_span_update}>La descripció és requerida</span> }
                    { errors.descripcioDeApatUpdate?.type === 'maxLength' && 
                        <span className={className_span_update}>Max 1000</span> }
                </div>
            </div>
            <div className={className_form_div_bttns_update}>
                <button
                    className={className_bttn_cancelar_update}
                    id={id_bttn_cancelar_update}
                    name={name_bttn_cancelar_update}
                >
                    <UpdateEnrere />
                </button>
                <input
                    className={className_submit_update}
                    name={name_submit_update}
                    value={value_submit_update}
                    type='submit'
                />
            </div>
        </form>
    )
}