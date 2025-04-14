import './App.css'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import Inici from './pagines/Inici.jsx'
import Apats from './pagines/Apats.jsx'
import Usuaris from './pagines/usuaris/gestio-usuaris.jsx'
import Contacte from './pagines/Contacte.jsx'

import Menus from './pagines/apats/Menus.jsx'
import TriarApat from './pagines/apats/TriarApat.jsx'
import CrearApat from './pagines/apats/CrearApat.jsx'
import Torns from './pagines/apats/Torns.jsx'

import User from './pagines/User.jsx'
import Login from './pagines/Login.jsx'
import SignUp from './pagines/SignUp.jsx'
import Page404 from './pagines/Page404.jsx'
import SearchPage from './pagines/Search.jsx'
import Contrasenya from './pagines/Contrasenya.jsx'


import { ApatsProvider } from './context/ApatsContext.jsx'
import { TornsProvider } from './context/TornsContext.jsx'
import { UsuarisProvider } from './context/UsuarisContext.jsx'
import { MenusProvider } from './pagines/apats/menus-seccio/MenusContext.jsx'

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
    cami: '/usuaris/gestio-usuaris',
    Component: Usuaris
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
    <UsuarisProvider>
      <ApatsProvider>
        <MenusProvider>
          <TornsProvider>
            <div className={className_pagina}> 
              <Router rutes={rutesApp} componentPerDefecte={Page404}>
                <Route cami='/' Component={Inici} />
                <Route cami='/apats' Component={Apats} />
                <Route cami='/usuaris' Component={Usuaris} />
                <Route cami='/contacte' Component={Contacte} />
              </Router>
            </div>
          </TornsProvider>
        </MenusProvider>
      </ApatsProvider>
    </UsuarisProvider>
    </>
  )
}

export default App