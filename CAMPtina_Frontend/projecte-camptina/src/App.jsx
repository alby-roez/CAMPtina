import './App.css'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import Inici from './pagines/Inici.jsx'
import Apats from './pagines/Apats.jsx'
import Usuaris from './pagines/usuaris/gestio-usuaris.jsx'
import Contacte from './pagines/Contacte.jsx'
import Equip from './pagines/Equip.jsx'

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
import Unauthorized from './pagines/Unauthorized.jsx'

import { MenusProvider } from './pagines/apats/menus-seccio/MenusContext.jsx'
import { DadesCamptinaProvider } from './services/DadesCamptina.jsx'

const rutesApp = [

  {
    cami: '/unauthorized',
    Component: Unauthorized,
    requiresAuth: false  
  },
  {
    cami: '/apats/torns',
    Component: Torns,
    requiresAuth: true,
    allowedRoles: ['GESTOR']
  },
  {
    cami: '/apats/menus',
    Component: Menus,
    requiresAuth: true,
    allowedRoles: ['GESTOR']
  },
  {
    cami: '/apats/triar-apat',
    Component: TriarApat,
    requiresAuth: true,
    allowedRoles: ['GESTOR', 'TREBALLADOR']
  },
  {
    cami: '/apats/crear-apat',
    Component: CrearApat,
    requiresAuth: true,
    allowedRoles: ['GESTOR']
  },
  {
    cami: '/usuaris/gestio-usuaris',
    Component: Usuaris,
    requiresAuth: true,
    allowedRoles: ['GESTOR']
  },
  {
    cami: '/equip/equip-dev',
    Component: Equip
  },
  {
    cami: '/user',
    Component: User
  },
  {
    cami: '/login',
    Component: Login,
    requiresAuth: false
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
      <MenusProvider>
        <DadesCamptinaProvider>
          <div className={className_pagina}>
            <Router rutes={rutesApp} componentPerDefecte={Page404}>
              <Route cami='/' Component={Inici} requiresAuth={true} allowedRoles={['GESTOR'] ['TREBALLADOR']}/>
              <Route cami='/apats' Component={Apats} requiresAuth={true} allowedRoles={['GESTOR']}/>
              <Route cami='/usuaris' Component={Usuaris} requiresAuth={true} allowedRoles={['GESTOR']}/>
              <Route cami='/contacte' Component={Contacte} requiresAuth={true} allowedRoles={['GESTOR'] ['TREBALLADOR']}/>
            </Router>
          </div>
        </DadesCamptinaProvider>
      </MenusProvider>
    </>
  )
}

export default App