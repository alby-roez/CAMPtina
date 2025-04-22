import "./FormActualitzarUsuaris.css";
import { useForm } from "react-hook-form";
import { CheckIcona, CloseIcona } from "../../Icones.jsx";
//import { useAxiosPeticionsUsuaris } from '../../services/UsuarisPeticions.js';
import { useEffect, useContext } from "react";
import { DadesCamptinaContext } from "../../services/DadesCamptina.jsx";
//import { useAxiosPeticionsRols } from '../../services/RolsPeticions.js'

export const FormActualitzarUsuaris = ({ usuari, onCancel }) => {
    //const { actualitzarUsuari } = useAxiosPeticionsUsuaris();
    //const { rols } = useAxiosPeticionsRols();
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
    const className_div_span = 'cn-span-error-container';
    const className_span = 'cn-span-error';

    return (
        <form className="form-update-usuari" onSubmit={peticioActualitzarUsuari}>
            <div className="form-grid">
                {/* Camp Nom */}
                <div className="form-group">
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
                    <div className={className_div_span}>
                        {errors.nom?.type === 'required' &&
                            <span className={className_span}>El nom és obligatori</span>}
                        {errors.nom?.type === 'minLength' &&
                            <span className={className_span}>Mínim 2 caràcters</span>}
                        {errors.nom?.type === 'maxLength' &&
                            <span className={className_span}>Màxim 45 caràcters</span>}
                    </div>
                </div>


                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Primer cognom"
                        min="1"
                        {...register("cognom1", {
                            required: true,
                            minLength: 2,
                            maxLength: 45
                        })}
                        className={errors.aforament ? "error" : ""}
                    />
                    <div className={className_div_span}>
                        {errors.cognom1?.type === 'required' &&
                            <span className={className_span}>El primer cognom és obligatori</span>}
                        {errors.cognom1?.type === 'minLength' &&
                            <span className={className_span}>Mínim 2 caràcters</span>}
                        {errors.cognom1?.type === 'maxLength' &&
                            <span className={className_span}>Màxim 45 caràcters</span>}
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Segon cognom"
                        min="1"
                        {...register("cognom2", {
                            required: true,
                            minLength: 2,
                            maxLength: 45
                        })}
                        className={errors.aforament ? "error" : ""}
                    />
                    <div className={className_div_span}>
                        {errors.cognom2?.type === 'required' &&
                            <span className={className_span}>El primer cognom és obligatori</span>}
                        {errors.cognom2?.type === 'minLength' &&
                            <span className={className_span}>Mínim 2 caràcters</span>}
                        {errors.cognom2?.type === 'maxLength' &&
                            <span className={className_span}>Màxim 45 caràcters</span>}
                    </div>
                </div>
                <div className="form-group">
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
                                {rol.nom}
                            </option>
                        ))}
                    </select>
                    <div className={className_div_span}>
                        {errors.rolUsuari?.type === 'required' &&
                            <span className={className_span}>El rol és obligatori</span>}
                    </div>
                </div>
                <div className="form-group">
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
                        className={errors.aforament ? "error" : ""}
                    />
                    <div className={className_div_span}>
                        {errors.email?.type === 'required' &&
                            <span className={className_span}>El correu és obligatori</span>}
                        {errors.email?.type === 'pattern' &&
                            <span className={className_span}>{errors.email.message}</span>}
                    </div>
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