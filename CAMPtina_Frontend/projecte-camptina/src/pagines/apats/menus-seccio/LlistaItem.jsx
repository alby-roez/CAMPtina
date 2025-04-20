import { NoIcona } from '../../../Icones.jsx'
import './LlistaMenus.css'

export const LlistaItem = () => {

    const className_div_llista = 'cn-div-llista-menus';

    const className_div_nom_llista = 'cn-div-nom-llista-menus';

    const className_h4_nom_llista = 'cn-h4-nom-llista-menus';

    const className_bttn_afegit_menu = 'cn-bttn-afegit-menu-llista-menus';
    const name_bttn_none_menu = 'noMenu';

    return (
        <div className={className_div_llista}>
            <div className={className_div_nom_llista}>
                <h4 className={className_h4_nom_llista}>{'----------'}</h4>
            </div>
            <button
                className={className_bttn_afegit_menu}
                name={name_bttn_none_menu}
            >
                <NoIcona />
            </button>
        </div>
    )
}