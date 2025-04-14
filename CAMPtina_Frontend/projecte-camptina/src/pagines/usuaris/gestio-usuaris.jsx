import { Navegacio } from '../../header/Navegacio.jsx'
import { Peu } from '../../footer/Peu.jsx'
import { FormCrearUsuari } from './FormCrearUsuari.jsx'
import { LlistaUsuaris } from './LlistaUsuaris.jsx'
import { UsuarisProvider } from './UsuarisContext.jsx'

export default function GestioUsuaris() {
    const className_main = 'cn-main-navegacio';

    return (
        <UsuarisProvider>
            <Navegacio />
            <main className={className_main}>
                <FormCrearUsuari />
                <LlistaUsuaris />
            </main>
            <Peu />
        </UsuarisProvider>
    )
}