import { Navegacio } from '../header/Navegacio.jsx';

export default function Contacte() {
    const className_main = 'cn-main-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <h1>Contacte</h1>
                <div style={{width: '100%', height: '200px', background: '#0dd'}}></div>
            </main>
        </>
    )
  
}