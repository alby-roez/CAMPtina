import './App.css'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import Inici from './pagines/Inici.jsx'
import Apats from './pagines/Apats.jsx'
import Equip from './pagines/Equip.jsx'
import Contacte from './pagines/Contacte.jsx'

import Menus from './pagines/apats/Menus.jsx'
import TriarApat from './pagines/apats/TriarApat.jsx'
import CrearApat from './pagines/apats/CrearApat.jsx'
import Torns from './pagines/apats/Torns.jsx'

import EquipDev from './pagines/equip/EquipDev.jsx'
import Gerent from './pagines/equip/Gerent.jsx'


import User from './pagines/User.jsx'
import Login from './pagines/Login.jsx'
import SignUp from './pagines/SignUp.jsx'
import Page404 from './pagines/Page404.jsx'
import SearchPage from './pagines/Search.jsx'
import Contrasenya from './pagines/Contrasenya.jsx'

import { ApatsProvider } from './context/ApatsContext.jsx'
import { TornsProvider } from './context/TornsContext.jsx'

const rutesApp = [

  {
    cami: '/apats/torns',
    Component: Torns
  },
  {
    cami: '/apats/menus',
    Component: Menus
  },
  {
    cami: '/apats/triar-apat',
    Component: TriarApat
  },
  {
    cami: '/apats/crear-apat',
    Component: CrearApat
  },
  {
    cami: '/equip/equip-dev',
    Component: EquipDev
  },
  {
    cami: '/equip/gerent',
    Component: Gerent
  },
  {
    cami: '/user',
    Component: User
  },
  {
    cami: '/login',
    Component: Login
  },
  {
    cami: '/sign-up',
    Component: SignUp
  },
  {
    cami: '/send-mail',
    Component: Contrasenya
  },
  {
    cami: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  const className_pagina = 'cn-pagina';
  return (
    <>
      <TornsProvider>
        <ApatsProvider>
          <div className={className_pagina}> 
            <Router rutes={rutesApp} componentPerDefecte={Page404}>
              <Route cami='/' Component={Inici} />
              <Route cami='/apats' Component={Apats} />
              <Route cami='/equip' Component={Equip} />
              <Route cami='/contacte' Component={Contacte} />
            </Router>
          </div>
        </ApatsProvider>
      </TornsProvider>
    </>
  )
}

export default App