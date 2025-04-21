import "./LlistaTorns.css";
import { useState, useEffect, useContext } from "react";
import {
  CloseFinestra,
  UpdateLlapis,
  DeletePaperera,
  CloseIcona,
  CheckIcona,
} from "../../../Icones.jsx";

//import { useAxiosPeticions } from "../../../services/TornsPeticions.js"
import { DadesCamptinaContext } from "../../../services/DadesCamptina.jsx";
import { FormActualitzarTorn } from "./FormActualitzarTorn.jsx";

export const LlistaTorns = () => {
  const [shaTancat, setShaTancat] = useState(false);
  
  const tancarFinestra = () => {
    setShaTancat(!shaTancat);
  };

  //const {torns, eliminarTorn} = useAxiosPeticions()
  const { torns, eliminarTorn } = useContext(DadesCamptinaContext);

  const [editantId, setEditantId ] = useState(null);

  
  useEffect(() => {
    const section = document.getElementById("id_section_llista_torns");
    const article = document.getElementById("id_article_llista_torns");
    if (shaTancat) {
      article.setAttribute("style", "display: none;");
      section.setAttribute("style", "height: 70px");
    } else {
      article.removeAttribute("style");
      section.removeAttribute("style");
    }
  }, [shaTancat]);

 
  const className_section = "cn-section-llista-torns";
  const id_section = "id_section_llista_torns";

  const className_article_nom = "cn-article-nom-llista-torns";
  const className_h3_nom = "cn-h3-nom-llista-torns";
  const nomSeccio = "Llista de torns";

  const className_article_llista = "cn-article-llista-torns";
  const id_article_llista = "id_article_llista_torns";
  const className_ul_llista = "cn-ul-llista-torns";

  const className_li_update_llista = "cn-li-update-llista-torns";
  const className_li_id_llista = "cn-li-id-llista-torns";
  const className_li_nom_llista = "cn-li-nom-llista-torns";
  const className_li_aforament = "cn-li-aforament-llista-torns";
  const className_li_horainici_llista = "cn-li-horainici-llista-torns";
  const className_li_horafi_llista = "cn-li-horafi-llista-torns";
  const className_li_delete_llista = "cn-li-delete-llista-torns";

  const className_div_llista = "cn-div-llista-torns";

  const className_li_item_update = "cn-li-item-update-llista-torns";
  const className_li_item_id = "cn-li-item-id-llista-torns";
  const className_li_item_nom = "cn-li-item-nom-llista-torns";
  const className_li_item_aforament = "cn-li-item-aforament-llista-torns";
  const className_li_item_horainici = "cn-li-item-horainici-llista-torns";
  const className_li_item_horafi = "cn-li-item-horafi-llista-torns";
  const className_li_item_delete = "cn-li-item-delete-llista-torns";

  const llistaID = "ID del torn";
  const llistaNom = "Nom del torn";
  const llistaAforament = "Aforament";
  const llistaHorainici = "Hora d'Inici";
  const llistaHorafi = "Hora Final";

  const className_bttn_finestra = "cn-bttn-finestra-llista-torns";
  const id_bttn_finestra = "id_bttn_finestra_llista_torns";
  const name_bttn_finestra = "finestraDeLlistatorns";

  const className_bttn_update = "cn-bttn-update-llista-torns";
  const id_bttn_update = "id_bttn_update_llista_torns";
  const name_bttn_update = "updateDeLlistatorns";

  const className_bttn_delete = "cn-bttn-delete-llista-torns";
  const id_bttn_delete = "id_bttn_delete_llista_torns";
  const name_bttn_delete = "deleteDeLlistatorns";

  return (
    <>
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
        <article className={className_article_llista} id={id_article_llista}>
          <ul className={className_ul_llista}>
            <li className={className_li_update_llista}></li>
            <li className={className_li_id_llista}>{llistaID}</li>
            <li className={className_li_nom_llista}>{llistaNom}</li>
            <li className={className_li_aforament}>{llistaAforament}</li>
            <li className={className_li_horainici_llista}>{llistaHorainici}</li>
            <li className={className_li_horafi_llista}>{llistaHorafi}</li>
            <li className={className_li_delete_llista}></li>
          </ul>
          {torns.map((torn) => (
            <div key={torn.id} className={className_div_llista}>
              {editantId === torn.id ? (
                <FormActualitzarTorn 
                  torn={torn} 
                  onCancel={() => setEditantId(null)}
                />
              ) : (
              <ul key={torn.id} className={className_ul_llista}>
                <li className={className_li_item_update}>
                  <button
                    className={className_bttn_update}
                    id={id_bttn_update}
                    name={name_bttn_update}
                    onClick={() => setEditantId(torn.id)}
                  >
                    <UpdateLlapis />
                  </button>
                </li>
                <li className={className_li_item_id}>{torn.id}</li>
                <li className={className_li_item_nom}>{torn.nom}</li>
                <li className={className_li_item_aforament}>
                  {torn.aforament}
                </li>
                <li className={className_li_item_horainici}>
                  {torn.horaInici}
                </li>
                <li className={className_li_item_horafi}>{torn.horaFi}</li>
                <li className={className_li_item_delete}>
                  <button
                    className={className_bttn_delete}
                    id={id_bttn_delete}
                    name={name_bttn_delete}
                    onClick={() => eliminarTorn(torn.id)}
                  >
                    <DeletePaperera />
                  </button>
                </li>
              </ul>
              )}
            </div>
          ))}
        </article>
      </section>
    </>
  );
};
