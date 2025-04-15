import { AddMenu, RemoveMenu, EscollitX } from '../../../Icones.jsx'
import './LlistaMenus.css'
import '../Menus.css'

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

export const BotoActiu = ({ id, desactivar }) => {
    const fn_desactiu = () => {
        desactivar()
    }

    const className_bttn_menu_actiu = 'cn-bttn-menu-actiu-menus';
    const name_bttn_menu_actiu = 'bttnActiu';

    return (
        <button
            className={className_bttn_menu_actiu}
            id={`id_${id}_bttn_menu_actiu_menus`}
            name={name_bttn_menu_actiu}
            onClick={fn_desactiu}
        >
            ACTIU
        </button>
    )
}

export const BotoDesactiu = ({ id, activar }) => {
    const fn_actiu = () => {
        activar()
    }

    const className_bttn_menu_desactiu = 'cn-bttn-menu-desactiu-menus';
    const name_bttn_menu_desactiu = 'bttnDesactiu';

    return (
        <button
            className={className_bttn_menu_desactiu}
            id={`id_${id}_bttn_menu_desactiu_menus`}
            name={name_bttn_menu_desactiu}
            onClick={fn_actiu}
        >
            DESACTIU
        </button>
    )
}