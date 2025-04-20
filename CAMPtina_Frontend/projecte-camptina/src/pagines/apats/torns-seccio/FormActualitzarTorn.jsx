import "./FormActualitzarTorn.css";
import { useForm } from "react-hook-form";
import { CheckIcona, CloseIcona } from "../../../Icones.jsx";
import { useAxiosPeticions } from "../../../services/TornsPeticions.js"
import { useEffect } from "react";

export const FormActualitzarTorn = ({ torn, onCancel }) => {
  const { torns, actualitzarTorn } = useAxiosPeticions();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (torn) {
      setValue("nom", torn.nom);
      setValue("aforament", torn.aforament);
      setValue("horaInici", torn.horaInici);
      setValue("horaFi", torn.horaFi);
    }
  }, [torn, setValue]);

   // Valor hora inici
   const horaInici = watch("horaInici");
   
  const peticioActualitzarTorn = handleSubmit(async (data) => {
    try {
      await actualitzarTorn(torn.id, data);
      onCancel(); // Tancar el formulari després de l'actualització
    } catch (error) {
      console.error("Error actualitzant el torn:", error);
    }
  });

  function conflicteHorari(nouInici, nouFi, tornsExistents) {
    return tornsExistents.filter(t => t.id !== torn.id)
    .some((torn) => {  
      // Convertim a minuts per facilitar la comparació
      const tornInici = convertirHoresAMinuts(torn.horaInici);
      const tornFi = convertirHoresAMinuts(torn.horaFi);
      const nouIniciMin = convertirHoresAMinuts(nouInici);
      const nouFiMin = convertirHoresAMinuts(nouFi);

      // Comprovem si el rang d'hores coincideix amb un altre torn
      return nouIniciMin < tornFi && nouFiMin > tornInici;
    });
  }

  function convertirHoresAMinuts(hora) {
    const [hores, minuts] = hora.split(":").map(Number);
    return hores * 60 + minuts;
  }

  return (
    <form className="form-update-torn" onSubmit={peticioActualitzarTorn}>
      <div className="form-grid">
        {/* Camp Nom */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Nom del torn"
            {...register("nom", {
              required: "El nom és obligatori",
              min: { value: 3, message: "Mínim 3 caràcters" },
              max: { value: 25, message: "Màxim 25 caràcters" },
            })}
            className={errors.nomDeTorn ? "error" : ""}
          />
          {errors.nom && (
            <span className="error-message">{errors.nom.message}</span>
          )}
        </div>

        {/* Camp Aforament */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Aforament"
            min="1"
            {...register("aforament", {
              required: "Aforament obligatori",
              min: { value: 1, message: "Mínim 1 persona" },
              max: { value: 50, message: "Màxim 50 persones" },
            })}
            className={errors.aforament ? "error" : ""}
          />
          {errors.aforament && (
            <span className="error-message">{errors.aforament.message}</span>
          )}
        </div>

        {/* Camp Hora Inici */}
        <div className="form-group">
          <input
            type="time"
            {...register("horaInici", {
              required: "Hora inici obligatòria",
            })}
            className={errors.horaInici ? "error" : ""}
          />
          {errors.horaInici && (
            <span className="error-message">{errors.horaInici.message}</span>
          )}
        </div>

        {/* Camp Hora Fi */}
        <div className="form-group">
          <input
            type="time"
            {...register("horaFi", {
              required: "Hora fi obligatòria",
              validate: (value) => {
                if (!horaInici) {
                  return true; // Si no hi ha hora d'inici, no cal validar
                }
                if (value === horaInici)
                  return "L'hora final no pot ser igual a la d'inici.";
                if (value < horaInici)
                  return "L'hora final ha de ser posterior a l'hora d'inici.";
                if (conflicteHorari(horaInici, value, torns.filter(t => t.id !== torn.id))) {
                  return "Aquest rang d'hores ja està assignat a un altre torn.";
                }
                return true;
              },
            })}
            className={errors.horaInici ? "error" : ""}
          />
          {errors.horaFi && (
            <span className="error-message">{errors.horaFi.message}</span>
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
