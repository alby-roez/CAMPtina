import { Link } from '../Link.jsx'

export const Peu = () => {
    const className_footer_peu = 'cn-footer-peu';
    
    const className_section_footer_titol_peu = 'cn-section-footer-titol-peu';
    const className_section_footer_link_peu = 'cn-section-footer-link-peu';


    return (
        <>
            <footer className={className_footer_peu}>
                <section className={className_section_footer_titol_peu}>
                    <h3>CAMPtina</h3>
                </section>
                <section className={className_section_footer_link_peu}>
                    <Link to='/equip/equip-dev'>Cristina Andión Catalán</Link>
                    <Link to='/equip/equip-dev'>Albert Rodríguez Rodríguez</Link>
                    <Link to='/equip/equip-dev'>Miquel Angel Sebastia Lopez</Link>
                    <Link to='/equip/equip-dev'>Palmira Romia Segura</Link>
                </section>
            </footer>
        </>
    )
    
}