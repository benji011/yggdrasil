import React from 'react'
import firebase from 'firebase/app'
import { Signout } from '~/components/Signout'

export const NavBar = (props: {
  user: firebase.User | null | undefined
  auth: firebase.auth.Auth
}) => {
  const { user, auth } = props
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="bulmalogo"
          />
        </a>
        <div className="buttons">{user ? <Signout auth={auth} /> : <></>}</div>
      </div>
    </nav>
  )
}
