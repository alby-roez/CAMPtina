import { Navegacio } from '../../header/Navegacio.jsx';

export default function Menus() {
    const className_main = 'cn-main-navegacio';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <h1>Menus</h1>
                <div style={{width: '100%', height: '200px', background: '#dd0'}}></div>
            </main>
        </>
    )
  
}