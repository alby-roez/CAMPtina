import { Navegacio } from '../header/Navegacio.jsx'
import { Peu } from '../footer/Peu.jsx'
//import { Link } from '../Link.jsx'
import camptina from '../assets/camptina.mp4'
/*import team from '../assets/team.png'
import menjar from '../assets/menjar.mp4'
import clock from '../assets/clock.mp4'
import clock_old from '../assets/clock_old.mp4'
import yoga from '../assets/yoga.mp4'
import menjador from '../assets/menjador.mp4'
import party from '../assets/party.mp4'*/
import { Seccio } from './apats/apats-seccio/Seccio.jsx'
//import rm from '../assets/team.png'
//import carta from '../assets/carta.png'
import menus from '../assets/menus.png'
import triarApat from '../assets/triar-apat.png'
import crearApat from '../assets/crear-apat.png'

export default function Apats() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    const txt_menus = 'Secció on podeu veure la carta d\'avui, amb els seus plats i postres inclosos. És merament informatiu.';

    const txt_triar_apat = 'Secció on l\'usuari/client pot triar els àpats disponibles del menú i reservar hora a la cantina.';

    const txt_crear_apat = 'Secció on només el gerent pot entrar i crear/afegir un àpat al menú.';

    const mg = () => {
        alert('Gran')
    }

    const mp = () => {
        alert('Petit')
    }

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_camptina' src={camptina} autoPlay loop muted></video>
                </section>
                <Seccio
                    nomSeccio='Menús'
                    srcImatge={menus}
                    camiA='/apats/menus'
                    txtA='Mirar recomanacions'
                    id_check_gerent='id_checkbox_gerent_seccio_menus'
                    id_check_usuari='id_checkbox_usuari_seccio_menus'
                    mesGran={mg}
                    mesPetit={mp}
                    txtInfo={txt_menus}
                >
                </Seccio>
                <Seccio
                    nomSeccio='Triar Àpat'
                    srcImatge={triarApat}
                    camiA='/apats/triar-apat'
                    txtA='Tria àpats i reserva'
                    id_check_gerent='id_checkbox_gerent_seccio_triar_apat'
                    id_check_usuari='id_checkbox_usuari_seccio_triar_apat'
                    mesGran={mg}
                    mesPetit={mp}
                    txtInfo={txt_triar_apat}
                >
                </Seccio>
                <Seccio
                    nomSeccio='Crear Àpat'
                    srcImatge={crearApat}
                    camiA='/apats/crear-apat'
                    txtA='Crea àpats ara'
                    id_check_gerent='id_checkbox_gerent_seccio_crear_apat'
                    id_check_usuari='id_checkbox_usuari_seccio_crear_apat'
                    mesGran={mg}
                    mesPetit={mp}
                    txtInfo={txt_crear_apat}
                >
                </Seccio>
            </main>
            <Peu />
        </>
    )
  
}