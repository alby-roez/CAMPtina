import { Link } from '../Link.jsx';

export default function Page404() {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            margin: '20px', fontSize: '40px', overflow: 'auto'}}>
                <h1 style={{textAlign: 'center'}}>ERROR 404</h1>
                <Link to='/'>Inici</Link>
            </div>
        </>
    )
}