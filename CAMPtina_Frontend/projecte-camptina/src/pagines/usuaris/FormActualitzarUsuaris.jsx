import "./FormActualitzarUsuaris.css";
import { useForm } from "react-hook-form";
import { CheckIcona, CloseIcona } from "../../Icones.jsx";
import { useUsuaris } from "../../context/UsuarisContext.jsx";
import { useEffect } from "react";

export const FormActualitzarUsuaris = ({ usuari, onCancel }) => {
    const { actualitzarUsuari } = useUsuaris();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const gestor = 1;
    const treballador = 2;

    const txtGestor = 'Gestor';
    const txtTreballador = 'Treballador';
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
    return (
        <form className="form-update-usuari" onSubmit={peticioActualitzarUsuari}>
            <div className="form-grid">
                {/* Camp Nom */}
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Nom"
                        {...register("nom", {
                            required: "El nom és obligatori",
                            min: { value: 3, message: "Mínim 3 caràcters" },
                            max: { value: 25, message: "Màxim 25 caràcters" },
                        })}
                        className={errors.nomUsuari ? "error" : ""}
                    />
                    {errors.nom && (
                        <span className="error-message">{errors.nom.message}</span>
                    )}
                </div>

                {/* Camp Aforament */}
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Primer cognom"
                        min="1"
                        {...register("cognom1", {
                            required: "El cognom és obligatori",
                            min: { value: 3, message: "Mínim 3 caràcters" },
                            max: { value: 25, message: "Màxim 25 caràcters" },
                        })}
                        className={errors.aforament ? "error" : ""}
                    />
                    {errors.aforament && (
                        <span className="error-message">{errors.cognom1.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Segon cognom"
                        min="1"
                        {...register("cognom2", {
                            required: "El cognom és obligatori",
                            min: { value: 3, message: "Mínim 3 persona" },
                            max: { value: 25, message: "Màxim 25 caràcters" },
                        })}
                        className={errors.aforament ? "error" : ""}
                    />
                    {errors.aforament && (
                        <span className="error-message">{errors.cognom2.message}</span>
                    )}
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
                        <option value={gestor}>{txtGestor}</option>
                        <option value={treballador}>{txtTreballador}</option>
                    </select>
                    {errors.aforament &&
                        <span className="error-message">{errors.rol.message}</span>}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Correu electrònic"
                        min="1"
                        {...register("email", {
                            required: "El correu electrònic és obligatori",
                            min: { value: 3, message: "Mínim 3 caràcters" },
                            max: { value: 25, message: "Màxim 25 caràcters" },
                        })}
                        className={errors.aforament ? "error" : ""}
                    />
                    {errors.aforament && (
                        <span className="error-message">{errors.email.message}</span>
                    )}
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="btn-submit">
                    <CheckIcona />
                </button>
                <button type="button" onClick={onCancel} className="btn-cancel">
                    <CloseIcona />
                </button>
            </div>
        </form>
    );

};
