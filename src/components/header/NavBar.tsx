import firebase from 'firebase/app'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '~/assets/css/navbar/navbar.css'
import logo from '~/assets/img/logo.png'
import { Button } from '~/components/common/Button'
import { Threads } from '~/components/header/Threads'

export const NavBar = (props: {
  firestore: firebase.firestore.Firestore
  user: firebase.User | null | undefined
  auth: firebase.auth.Auth
  setThreadData: Function
  setShowModal: Function
}) => {
  const { firestore, user, auth, setThreadData, setShowModal } = props
  const [showBurgerDropdown, setShowBurgerDropdown] = useState(false)

  /**
   * Signs user out. Sets burger dropdown menu to false just incase
   * to avoid weird UI crap.
   */
  const signout = () => {
    auth.signOut()
    setShowBurgerDropdown(false)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setShowBurgerDropdown(false)}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="buttons header-buttons header-drop-down">
          {user && (
            <Threads
              firestore={firestore}
              setThreadData={setThreadData}
              setShowModal={setShowModal}
            />
          )}
        </div>
        <span
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBurgerMenu"
          onClick={() => setShowBurgerDropdown(!showBurgerDropdown)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>
      <div
        id="navbarBurgerMenu"
        className={`navbar-menu ${showBurgerDropdown && 'is-active'}`}
      >
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/" onClick={() => setShowBurgerDropdown(false)}>
              <h4>
                <i className="fas fa-home" /> Home
              </h4>
            </Link>
          </div>
          <div className="navbar-item">
            {user && (
              <h4>
                Welcome back, <strong>{user.displayName}!</strong>
              </h4>
            )}
          </div>
          <div className="navbar-item">
            {user && auth.currentUser ? (
              <span className="icon-text">
                <Button
                  className="button is-danger is-danger-button"
                  text="Signout"
                  icon="fas fa-sign-out-alt"
                  onClick={() => signout()}
                />
              </span>
            ) : (
              <Link to="/login" onClick={() => setShowBurgerDropdown(false)}>
                <Button
                  className="button is-primary"
                  text="Login"
                  icon="fas fa-sign-in-alt"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
