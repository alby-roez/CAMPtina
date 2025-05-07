import { Link } from '../Link.jsx'

export default function Page404() {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            margin: '20px', fontSize: '40px', overflow: 'auto'}}>
                <h1 style={{textAlign: 'center', color: '#222'}}>ERROR 404</h1>
                <h4 style={{textAlign: 'center', color: '#555'}}>Aquesta ruta no existeix</h4>
                <br/>
                <br/>
                <br/>
                <Link to='/'>Pàgina d'inici</Link>
            </div>
        </>
    )
}