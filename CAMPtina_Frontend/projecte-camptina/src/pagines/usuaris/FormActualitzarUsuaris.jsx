import './FormActualitzarUsuaris.css'
import { useForm } from 'react-hook-form'
import { CheckIcona, CloseIcona } from '../../Icones.jsx'
import { useEffect, useContext } from 'react'
import { DadesCamptinaContext } from '../../services/DadesCamptina.jsx'

export const FormActualitzarUsuaris = ({ usuari, onCancel }) => {
    const { actualitzarUsuari, rols } = useContext(DadesCamptinaContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        if (usuari) {
            setValue("nom", usuari.nom);
            setValue("cognom1", usuari.cognom1);
            setValue("cognom2", usuari.cognom2);
            setValue("rolId", usuari.rolId);
            setValue("email", usuari.email);
            setValue("contrasenya", usuari.contrasenya);
        }
    }, [usuari, setValue]);

    const peticioActualitzarUsuari = handleSubmit(async (data) => {
        try {
            await actualitzarUsuari(usuari.id, data);
            onCancel();
        } catch (error) {
            console.error("Error actualitzant usuari:", error);
        }
    });

    const className_span = 'error-message-form-actualitzar-usuaris';

    return (
        <form className="form-update-usuari" onSubmit={peticioActualitzarUsuari}>
            <div className="form-grid-form-actualitzar-usuaris">
                <div className="form-group-form-actualitzar-usuaris">
                    <input
                        defaultValue={usuari.nom}
                        type="text"
                        placeholder="Nom"
                        {...register("nom", {
                            required: true,
                            minLength: 2,
                            maxLength: 45
                        })}
                    />
                    {errors.nom?.type === 'required' &&
                        <span className={className_span}>El nom és obligatori</span>}
                    {errors.nom?.type === 'minLength' &&
                        <span className={className_span}>Mínim 2 caràcters</span>}
                    {errors.nom?.type === 'maxLength' &&
                        <span className={className_span}>Màxim 45 caràcters</span>}
                </div>
                <div className="form-group-form-actualitzar-usuaris">
                    <input
                        type="text"
                        placeholder="Primer cognom"
                        min="1"
                        {...register("cognom1", {
                            required: true,
                            minLength: 2,
                            maxLength: 45
                        })}
                        className={errors.aforament ? "error-form-actualitzar-usuaris" : ""}
                    />
                    {errors.cognom1?.type === 'required' &&
                        <span className={className_span}>El primer cognom és obligatori</span>}
                    {errors.cognom1?.type === 'minLength' &&
                        <span className={className_span}>Mínim 2 caràcters</span>}
                    {errors.cognom1?.type === 'maxLength' &&
                        <span className={className_span}>Màxim 45 caràcters</span>}
                </div>
                <div className="form-group-form-actualitzar-usuaris">
                    <input
                        type="text"
                        placeholder="Segon cognom"
                        min="1"
                        {...register("cognom2", {
                            required: true,
                            minLength: 2,
                            maxLength: 45
                        })}
                        className={errors.aforament ? "error-form-actualitzar-usuaris" : ""}
                    />
                </div>
                <div className="form-group-form-actualitzar-usuaris">
                    <select
                        defaultValue={''}
                        placeholder="Rol"
                        {...register('rolId', {
                            required: "El rol és obligatori"
                        })}
                    >
                        <option value='' disabled></option>
                        {rols.map((rol) => (
                            <option key={rol.id} value={rol.id}>
                                {rol.nom.charAt(0).toUpperCase() + rol.nom.slice(1).toLowerCase()}
                            </option>
                        ))}
                    </select>
                    {errors.rolUsuari?.type === 'required' &&
                        <span className={className_span}>El rol és obligatori</span>}
                </div>
                <div className="form-group-form-actualitzar-usuaris">
                    <input
                        type="email"
                        placeholder="Correu electrònic"
                        min="1"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Format de correu no vàlid'
                            }
                        })}
                        className={errors.aforament ? "error-form-actualitzar-usuaris" : ""}
                    />
                    {errors.email?.type === 'required' &&
                        <span className={className_span}>El correu és obligatori</span>}
                    {errors.email?.type === 'pattern' &&
                        <span className={className_span}>{errors.email.message}</span>}
                </div>
                <div className="form-group-form-actualitzar-usuaris">
                    <input
                        defaultValue={usuari.contrasenya}
                        type="password"
                        placeholder="Contrasenya"
                        {...register("contrasenya", {
                            required: true,
                            minLength: 8
                        })}
                    />
                    {errors.contrasenyaXifrada?.type === 'required' &&
                        <span className={className_span}>La contrasenya és obligatoria</span>}
                    {errors.contrasenyaXifrada?.type === 'minLength' &&
                        <span className={className_span}>La contrasenya ha de tenir mínim 8 caràcters</span>}
                </div>
            </div>
            <div className="form-actions-form-actualitzar-usuaris">
                <button type="button" onClick={onCancel} className="btn-cancel-form-actualitzar-usuaris">
                    <CloseIcona />
                </button>
                <button type="submit" className="btn-submit-form-actualitzar-usuaris">
                    <CheckIcona />
                </button>
            </div>
        </form>
    )
}