import './FormCrearTorn.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect, useContext } from 'react'
import { ResetRoda, CloseFinestra } from '../../../Icones.jsx'
import { DadesCamptinaContext } from '../../../services/DadesCamptina.jsx'

export const FormCrearTorn = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const { torns, crearTorn } = useContext(DadesCamptinaContext);

  /**
   * @description Valor hora inici
   */
  const horaInici = watch("horaInici");

  const peticioCrearTorn = handleSubmit((data) => {
    const nouTorn = {
      nom: data.nomDeTorn,
      aforament: parseInt(data.aforament),
      horaInici: data.horaInici,
      horaFi: data.horaFinal,
    };

    crearTorn(nouTorn);
    reset();
  });

  const fn_resetejarTorn = (event) => {
    event.preventDefault();
    reset();
}

  const [esTancat, setEsTancat] = useState(false);

  const tancarFinestra = () => {
    setEsTancat(!esTancat);
  };

  useEffect(() => {
    if (esTancat) {
      const section = document.getElementById("id_section_form_crear_torn");
      const article = document.getElementById("id_form_crear_torn");
      article.setAttribute("style", "display: none;");
      section.setAttribute("style", "height: 70px");
    } else {
      const section = document.getElementById("id_section_form_crear_torn");
      const article = document.getElementById("id_form_crear_torn");
      article.removeAttribute("style");
      section.removeAttribute("style");
    }
  }, [esTancat]);

  function conflicteHorari(nouInici, nouFi, tornsExistents) {
    return tornsExistents.some((torn) => {
      const tornInici = convertirHoresAMinuts(torn.horaInici);
      const tornFi = convertirHoresAMinuts(torn.horaFi);
      const nouIniciMin = convertirHoresAMinuts(nouInici);
      const nouFiMin = convertirHoresAMinuts(nouFi);
      return nouIniciMin < tornFi && nouFiMin > tornInici;
    });
  }

  function convertirHoresAMinuts(hora) {
    const [hores, minuts] = hora.split(":").map(Number);
    return hores * 60 + minuts;
  }

  const className_section = "cn-section-form-crear-torn";
  const id_section = "id_section_form_crear_torn";
  const className_article_nom = "cn-article-nom-form-crear-torn";
  const className_h3_nom = "cn-h3-nom-form-crear-torn";
  const nomSeccio = "Creació d'un torn";

  const className_form = "cn-form-crear-torn";
  const id_form = "id_form_crear_torn";

  const className_div_contingut_form = "cn-div-contingut-form-crear-torn";
  const className_div_txt_nom_aforament_form = "cn-div-txt-nom-aforament-form-crear-torn";
  const className_div_txt_horaris_form = "cn-div-txt-horaris-form-crear-torn";
  const className_div_lbl_txt_form = "cn-div-lbl-text-form-crear-torn";
  const className_div_lbl_time_form = "cn-div-lbl-time-form-crear-torn";
  const className_div_bttn_form = "cn-div-bttn-form-crear-torn";

  const className_input_txt_nom = "cn-input-txt-nom-form-crear-torn";
  const id_input_txt_nom = "id_input_txt_nom_form_crear_torn";
  const name_input_txt_nom = "nomTorn";

  const className_input_num = "cn-input-num-form-crear-torn";
  const id_input_num = "id_input_num_form_crear_torn";
  const name_input_num = "numAforament";

  const className_input_inici = "cn-input-inici-form-crear-torn";
  const id_input_inici = "id_input_inici_form_crear_torn";
  const name_input_inici = "horaInici";

  const className_input_final = "cn-input-final-form-crear-torn";
  const id_input_final = "id_input_final_form_crear_torn";
  const name_input_final = "horaFinal";

  const txtInputNomTorn = "Nom del torn:";
  const txtInputNumAforament = "Aforament:";
  const txtInputhoraInici = "Hora d'inici:";
  const txtInputhoraFinal = "Hora final:";

  const id_reset = "id_reset_form_crear_torn";
  const name_reset = "resetejarCrearTorn";

  const id_submit = "id_submit_form_crear_torn";
  const name_submit = "crearTorn";
  const value_submit = "Crear";

  const className_bttn_finestra = "cn-bttn-finestra-form-crear-torn";
  const id_bttn_finestra = "id_bttn_finestra_form_crear_torn";
  const name_bttn_finestra = "finestraDeFormCrear";

  const className_span = "cn-span-error-form-torns";

  return (
    <section className={className_section} id={id_section}>
      <article className={className_article_nom}>
        <h3 className={className_h3_nom}>{nomSeccio}</h3>
        <button
          className={className_bttn_finestra}
          id={id_bttn_finestra}
          name={name_bttn_finestra}
          onClick={tancarFinestra}
        >
          <CloseFinestra />
        </button>
      </article>
      <form className={className_form} id={id_form} onSubmit={peticioCrearTorn}>
        <div className={className_div_contingut_form}>
          <div className={className_div_txt_nom_aforament_form}>
            <div className='cn-div-container-form-crear-torn'>
              <div className={className_div_lbl_txt_form}>
                <label htmlFor={id_input_txt_nom}>{txtInputNomTorn}</label>
                <input
                  defaultValue={""}
                  className={className_input_txt_nom}
                  id={id_input_txt_nom}
                  name={name_input_txt_nom}
                  type="text"
                  {...register("nomDeTorn", {
                    required: true,
                    minLength: 3,
                    maxLength: 25,
                  })}
                />
              </div>
              {errors.nomDeTorn?.type === "required" &&
              <span className={className_span}>El nom és obligatori</span>}
              {errors.nomDeTorn?.type === "minLength" &&
              <span className={className_span}>Mínim 3 caràcters</span>}
              {errors.nomDeTorn?.type === "maxLength" &&
              <span className={className_span}>Màxim 25 caràcters</span>}
            </div>
            <div className='cn-div-container-form-crear-torn'>
              <div className={className_div_lbl_txt_form}>
                <label htmlFor={id_input_num}>{txtInputNumAforament}</label>
                <input
                  defaultValue={""}
                  className={className_input_num}
                  id={id_input_num}
                  name={name_input_num}
                  type="number"
                  {...register("aforament", {
                    required: true,
                    min: 1,
                    max: 50,
                  })}
                />
              </div>
              {errors.aforament?.type === "required" &&
              <span className={className_span}>L'aforament és obligatori</span>}
              {errors.aforament?.type === "min" &&
              <span className={className_span}>Mínim 1 persona</span>}
              {errors.aforament?.type === "max" &&
              <span className={className_span}>Màxim 50 persones</span>}
            </div>
          </div>
          <div className={className_div_txt_horaris_form}>
            <div className='cn-div-container-form-crear-torn'>
              <div className={className_div_lbl_time_form}>
                <label htmlFor={id_input_inici}>{txtInputhoraInici}</label>
                <input
                  defaultValue={""}
                  className={className_input_inici}
                  id={id_input_inici}
                  name={name_input_inici}
                  type="time"
                  {...register("horaInici", {
                    required: true,
                  })}
                />
              </div>
              {errors.horaInici?.type === "required" &&
              <span className={className_span}>Hora d'inici obligatòria</span>}
            </div>
            <div className='cn-div-container-form-crear-torn'>
              <div className={className_div_lbl_time_form}>
                <label htmlFor={id_input_final}>{txtInputhoraFinal}</label>
                <input
                  defaultValue={""}
                  className={className_input_final}
                  id={id_input_final}
                  name={name_input_final}
                  type="time"
                  {...register("horaFinal", {
                    required: "Hora final obligatòria",
                    validate: (value) => {
                      if (!horaInici) {
                        return true;
                      }
                      if (value === horaInici)
                        return "L'hora final no pot ser igual a la d'inici.";
                      if (value < horaInici)
                        return "L'hora final ha de ser posterior a l'hora d'inici.";
                      if (conflicteHorari(horaInici, value, torns)) {
                        return "Aquest rang d'hores ja està assignat a un altre torn.";
                      }
                      return true;
                    },
                  })}
                ></input>
              </div>
              {errors.horaFinal && <span className={className_span}>{errors.horaFinal.message}</span>}
            </div>
          </div>
        </div>
        <div className={className_div_bttn_form}>
          <button id={id_reset} name={name_reset} onClick={event => fn_resetejarTorn(event)}>
            <ResetRoda />
          </button>
          <input
            id={id_submit}
            name={name_submit}
            value={value_submit}
            type="submit"
          />
        </div>
      </form>
    </section>
  )
}