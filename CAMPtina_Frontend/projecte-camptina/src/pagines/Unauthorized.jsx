import { ESDEVENIMENTS } from '../consts.js'   // ← cal importar-ho!

export default function Unauthorized() {
  const handleReturn = () => {
    window.history.pushState({}, '', '/')
    // fem que el Router noti el canvi
    window.dispatchEvent(new Event(ESDEVENIMENTS.CAPENDAVANT))
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      gap: '10px',
      margin: '20px',
      fontSize: '40px',
      overflow: 'auto'
    }}>
      <h1 style={{ textAlign: 'center' }}>401 — No autoritzat</h1>
      <p>No tens permisos per accedir a aquesta pàgina.</p>
      <button onClick={handleReturn}>Tornar a Inici</button>
    </div>
  )
}