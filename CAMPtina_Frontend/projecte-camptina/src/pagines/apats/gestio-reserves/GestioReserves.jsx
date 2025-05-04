import { useEffect, useState, useContext } from 'react';
import { DadesCamptinaContext } from '../../../services/DadesCamptina';
import './GestioReserves.css';
import {
    UpdateLlapis,
    DeletePaperera
} from "../../../Icones.jsx";


export default function GestioReserves() {
    const { reserva, carregarReserva, eliminarReserva } = useContext(DadesCamptinaContext);
    const [llistaReserves, setLlistaReserves] = useState([]);

    useEffect(() => {
        const carregarReserves = async () => {
            try {
                const resposta = await carregarReserva();
                setLlistaReserves(resposta);
            } catch (error) {
                console.error("Error carregant les reserves: ", error);
            }
        };
        carregarReserves();
    }, []);

    /* const handleEliminar = async (id) => {
         try {
             await eliminarReserva(id);
             setLlistaReserves(prev => prev.filter(r => r.idReserva !== id));
 
         } catch (error) {
             console.error('Error eliminant la reserva: ', error);
         }
     };*/
    const className_section = 'cn-section-form-reserves';
    const id_section = 'id_section_form_reserves'
    const className_article_nom = 'cn-article-nom-form-reserves';
    const className_h3_nom = 'cn-h3-nom-form-reserves';
    const nomSeccio = 'Gestió de Reserves';
    const className_bttn_delete = "cn-bttn-delete-reserva";
    const id_bttn_delete = "id_bttn_delete_reserva";
    const name_bttn_delete = "deleteDeReserva";
    //const className_bttn_update = "cn-bttn-update-reserva";
    //const id_bttn_update = "id_bttn_update_reserva";
    //const name_bttn_update = "updateDeReserva";
    const className_accions_reserva = "cn-accions-reserva";
    return (
        <>
            <section className={className_section} id={id_section}>
                <article className={className_article_nom}>
                    <h3 className={className_h3_nom}>{nomSeccio}</h3>
                </article>
                <div>
                    {reserva && reserva.length > 0 ? (
                        <table className="cn-taula-reserves">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Email Usuari</th>
                                    <th>Data</th>
                                    <th>Torn</th>
                                    <th>Menú</th>
                                    <th>Preu</th>
                                    <th>Accions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reserva.map(reservaActual => (
                                    <tr className='cn-taula-reserves tr' key={reservaActual.idReserva}>
                                        <td>{reservaActual.idReserva}</td>
                                        <td>{reservaActual.emailUsuari}</td>
                                        <td>{reservaActual.data}</td>
                                        <td>{reservaActual.nomTorn}</td>
                                        <td>
                                            <strong>Primer:</strong> {reservaActual.nomPrimer}<br />
                                            <strong>Segon:</strong> {reservaActual.nomSegon}<br />
                                            <strong>Postre:</strong> {reservaActual.nomPostre}
                                        </td>
                                        <td>{reservaActual.preuMenu.toFixed(2)} €</td>
                                        <td>
                                            <div className={className_accions_reserva}>
                                                <button className={className_bttn_delete}
                                                    id={id_bttn_delete}
                                                    name={name_bttn_delete} onClick={() => eliminarReserva(reservaActual.idReserva)}>  <DeletePaperera /></button>                                             
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No hi ha reserves disponibles.</p>
                    )}
                </div>
            </section>
        </>


    );

}