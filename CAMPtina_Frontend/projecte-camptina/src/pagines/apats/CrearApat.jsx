import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import { FormCrearApat } from './apats-seccio/FormCrearApat.jsx'
import { FormEliminarApat } from './apats-seccio/FormEliminarApat.jsx'
import { LlistaApats } from './apats-seccio/LlistaApats.jsx'
import clock from '../../assets/clock_old.mp4'
import { useState , useEffect } from 'react'
import axios from 'axios'

export default function CrearApat() {
    const className_main = 'cn-main-navegacio';
    const className_section_video = 'cn-section-video-navegacio';

    // Estat per guardar la llista d'apats
    const [apats, setApats] = useState([])

    useEffect(() => {
        carregarApats()
    }, [])

    // Funció per obtenir els àpats del backend
    const carregarApats = async () => {
        try {
            const resposta = await axios.get('http://localhost:8080/api/apats')
            setApats(resposta.data)
        } catch (error) {
            console.log("Error obtenint els apats:", error)
        }
    }

    // Funció per crear un nou àpat
    const crearApat = async (nouApat) => {
        try {
            const resposta = await axios.post('http://localhost:8080/api', nouApat, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("Apat creat:", resposta.data)
            await carregarApats()
        } catch (error) {
            console.error("Error creant l'àpat:", error.response?.data)
        }
    }

    // Funció per eliminar un àpat
    const eliminarApat = async (idApat) => {
        try {
            await axios.delete(`http://localhost:8080/api/${idApat}`)
            await carregarApats()
        } catch (error) {
            console.log("Error eliminant l'àpat:", error)
        }
    }

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <section className={className_section_video}>
                    <video id='id_video_clock' src={clock} autoPlay loop muted></video>
                </section>
                {/* Passem les funcions i dades com a props als components fills */}
                <FormCrearApat alCrearApat = {crearApat}/>
                <FormEliminarApat alEliminarApat = {eliminarApat} />
                <LlistaApats apats = {apats}
                alEliminarApat = {eliminarApat}
                />
            </main>
            <Peu />
        </>
    )
}