export function PopUpReserva({ missatge, onTancar }) {
    return (
        <div style={popupFons}>
            <div style={popupContingut}>
                <p>{missatge}</p>
                <button onClick={onTancar}>Tancar</button>
            </div>
        </div>
    );
}

const popupFons = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
};

const popupContingut = {
    color: '#color',
    backgroundColor: '#6699CC',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    textAlign: 'center',
    border: '5px solid #336699',
    font: '24px monospace, Arial, Helvetica, sans-serif'
};