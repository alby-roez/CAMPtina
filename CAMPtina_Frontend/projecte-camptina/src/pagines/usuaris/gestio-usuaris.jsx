import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import { FormCrearUsuari } from './FormCrearUsuari.jsx'
import { LlistaUsuaris } from './LlistaUsuaris.jsx'

export default function GestioUsuaris() {
    const className_main = 'cn-main-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <FormCrearUsuari />
                <LlistaUsuaris />
            </main>
            <Peu />
        </>
    )
}