import { AddMenu, RemoveMenu, EscollitX } from '../../../Icones.jsx'
import './LlistaMenus.css'

export const BotoAddMenu = ({ id, addMenu, apat }) => {
    const fn_addMenu = () => {
        addMenu(apat)
    }

    const className_bttn_add_menu = 'cn-bttn-add-menu-llista-menus';
    const name_bttn_add_menu = 'addMenu';

    return (
        <button
            className={className_bttn_add_menu}
            id={`id_${id}_bttn_add_menu_llista_menus`}
            name={name_bttn_add_menu}
            onClick={fn_addMenu}
        >
            <AddMenu />
        </button>
    )
}

export const BotoAddMenuAfegit = ({ id }) => {

    const className_bttn_add_menu = 'cn-bttn-afegit-menu-llista-menus';
    const name_bttn_add_menu = 'addMenuAfegit';

    return (
        <button
            className={className_bttn_add_menu}
            id={`id_${id}_bttn_add_menu_llista_menus`}
            name={name_bttn_add_menu}
            disabled
        >
            <EscollitX />
        </button>
    )
}