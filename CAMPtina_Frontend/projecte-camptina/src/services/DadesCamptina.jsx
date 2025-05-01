import { createContext, useState, useEffect } from 'react'
import { useAxiosPeticionsApats } from './AxiosPeticionsApats'
import { useAxiosPeticionsMenus } from './AxiosPeticionsMenus'
import { useAxiosPeticionsMenusApats } from './AxiosPeticionsMenusApats.js'
import { useAxiosPeticionsTorns } from './AxiosPeticionsTorns.js'
import { useAxiosPeticionsRols } from './AxiosPeticionsRols.js'
import { useAxiosPeticionsUsuaris } from './AxiosPeticionsUsuaris.js'

export const DadesCamptinaContext = createContext()

export function DadesCamptinaProvider({ children }) {

    const [usuariActiu, setUsuariActiu] = useState(() => {
        const d = localStorage.getItem('dadesUsuari')
        return d ? JSON.parse(d) : null
    })

    useEffect(() => {
        const emmagatzemaCanvi = (e) => {
          if (e.key === 'dadesUsuari') {
            setUsuariActiu(e.newValue ? JSON.parse(e.newValue) : null);
          }
        };
        window.addEventListener('storage', emmagatzemaCanvi);
        return () => window.removeEventListener('storage', emmagatzemaCanvi);
      }, []);

    const login = (dades) => {
        localStorage.setItem('dadesUsuari', JSON.stringify(dades))
        localStorage.setItem('jwtToken', dades.token);
        setUsuariActiu(dades)
        window.location.href = '/';
    }

    const logout = () => {
        localStorage.removeItem('dadesUsuari')
        localStorage.removeItem('jwtToken')
        setUsuariActiu(null)
    }

    const dadesApats = usuariActiu ? useAxiosPeticionsApats() : {}
    const dadesMenus = usuariActiu ? useAxiosPeticionsMenus() : {}
    const dadesMenusApats = usuariActiu ? useAxiosPeticionsMenusApats() : {}
    const dadesTorns = usuariActiu ? useAxiosPeticionsTorns() : {}
    const dadesRols = usuariActiu ? useAxiosPeticionsRols() : {}
    const dadesUsuaris = usuariActiu ? useAxiosPeticionsUsuaris() : {}

   
    return (
        <DadesCamptinaContext.Provider value={{
            ...dadesApats, ...dadesMenus, ...dadesMenusApats, ...dadesTorns, ...dadesRols, ...dadesUsuaris,
            usuariActiu, login, logout
        }}
        >
            {children}
        </DadesCamptinaContext.Provider>
    )
}