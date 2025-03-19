import { Navegacio } from '../header/Navegacio.jsx';

export default function User() {
    const className_main = 'cn-main-navbar';

    return (
        <>
            <Navegacio />
            <main className={className_main}>
                <h1>User</h1>
                <div style={{width: '100%', height: '200px', background: '#d00'}}></div>
            </main>
        </>
    )
  
}