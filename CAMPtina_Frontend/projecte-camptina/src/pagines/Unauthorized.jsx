import { Link } from '../Link.jsx'

export default function Unauthorized() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px',
      fontSize: '40px',
      overflow: 'auto'
    }}>
      <h1 style={{ textAlign: 'center', color: '#222'}}>401 — No autoritzat</h1>
      <h4 style={{textAlign: 'center', color: '#555'}}>No tens permisos per accedir a aquesta pàgina.</h4>
      <br/>
      <br/>
      <br/>
      <Link to='/'>Pàgina d'inici</Link>
    </div>
  )
}