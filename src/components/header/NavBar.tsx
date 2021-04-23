import firebase from 'firebase/app'
import React from 'react'

import '~/assets/css/navbar/navbar.css'
import logo from '~/assets/img/logo.png'
import { Signout } from '~/components/Signout'

export const NavBar = (props: {
  user: firebase.User | null | undefined
  auth: firebase.auth.Auth
}) => {
  const { user, auth } = props
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="logo" />
        <div className="buttons">{user ? <Signout auth={auth} /> : <></>}</div>
      </div>
    </nav>
  )
}
