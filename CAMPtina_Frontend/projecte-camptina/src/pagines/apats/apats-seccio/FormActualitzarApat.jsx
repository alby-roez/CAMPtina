import './FormActualitzarApat.css'
import { useForm } from 'react-hook-form'
import { useContext, useEffect} from 'react'
import { UpdateEnrere } from '../../../Icones.jsx'
import { DadesCamptinaContext } from '../../../services/DadesCamptina.jsx'

export const FormActualitzarApat = ({ id, apat }) => {

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm()
    const { actualitzarApat, categories } = useContext(DadesCamptinaContext)

    useEffect(() => {
        if (apat) {
            setValue("nomDeApatUpdate", apat.nom);
            setValue("categoriaDeApatUpdate", apat.categoriaId);
            setValue("descripcioDeApatUpdate", apat.descripcio);
        }
    }, [apat, setValue]);


    const peticioActualitzarApat = handleSubmit(async (data) => {
        const apatActualitzat = {
            nom: data.nomDeApatUpdate,
            categoriaId: parseInt(data.categoriaDeApatUpdate),
            descripcio: data.descripcioDeApatUpdate
        };
        actualitzarApat(id, apatActualitzat)
        reset();
    });

    const fn_resetejar = (event) => {
        event.preventDefault();
        reset();
    }

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

    const preTxtarea_update = 'Descriu l\'àpat...';
    const txtareaRows_update = 3;
    const txtareaCols_update = 30;

    const className_span_update = 'cn-span-update-llista-apats';

    const className_form_div_bttns_update = 'cn-form-div-bttns-update-llista-apats';

    const className_submit_update = 'cn-submit-update-llista-apats';
    const id_submit_update = `id_${id}submit_update_llista_apats`;
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
                        defaultValue={apat.nom}
                        className={className_input_nom_update}
                        id={id_input_nom_update}
                        name={name_input_nom_update}
                        placeholder='Nom'
                        type='text'
                        {...register('nomDeApatUpdate', {
                            required: true
                        })}
                    />
                    {errors.nomDeApatUpdate?.type === 'required' &&
                        <span className={className_span_update}>El nom és requerit</span>}
                </div>
                <div className={className_form_div_inputs_categoria_update}>
                    <select
                        defaultValue={apat.categoriaId}
                        className={className_select_categoria_update}
                        id={id_select_categoria_update}
                        name={name_select_categoria_update}
                        {...register('categoriaDeApatUpdate', {
                            required: true
                        })}
                    >
                        <option value='' disabled>Categoria</option>
                        {categories.map((categoria)=>(
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nom.charAt(0).toUpperCase() + categoria.nom.slice(1).toLowerCase()}
                            </option>
                        ))}
                    </select>
                    {errors.categoriaDeApatUpdate?.type === 'required' &&
                        <span className={className_span_update}>Escull categoria</span>}
                </div>
                <div className={className_form_div_inputs_descripcio_update}>
                    <textarea
                        defaultValue={apat.descripcio}
                        className={className_txtarea_descripcio_update}
                        id={id_txtarea_descripcio_update}
                        name={name_txtarea_descripcio_update}
                        placeholder={preTxtarea_update}
                        rows={txtareaRows_update}
                        cols={txtareaCols_update}
                        {...register('descripcioDeApatUpdate', {
                            required: true,
                            maxLength: 100
                        })}
                    />
                    {errors.descripcioDeApatUpdate?.type === 'required' &&
                        <span className={className_span_update}>La descripció és requerida</span>}
                    {errors.descripcioDeApatUpdate?.type === 'maxLength' &&
                        <span className={className_span_update}>Max 100</span>}
                </div>
            </div>
            <div className={className_form_div_bttns_update}>
                <button
                    className={className_bttn_cancelar_update}
                    id={id_bttn_cancelar_update}
                    name={name_bttn_cancelar_update}
                    onClick={event => fn_resetejar(event)}
                >
                    <UpdateEnrere />
                </button>
                <input
                    className={className_submit_update}
                    id={id_submit_update}
                    name={name_submit_update}
                    value={value_submit_update}
                    type='submit'
                />
            </div>
        </form>
    )
}