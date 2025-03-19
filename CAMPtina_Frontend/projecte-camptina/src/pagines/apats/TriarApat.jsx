import { Navegacio } from '../../header/Navegacio.jsx';

export default function TriarApat() {
    const className_main = 'cn-main-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <h1>Triar</h1>
                <div style={{width: '100%', height: '200px', background: '#dd0'}}></div>
            </main>
        </>
    )
  
}