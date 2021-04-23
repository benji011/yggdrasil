import firebase from 'firebase/app'
import React from 'react'

import '~/assets/css/login/login.css'
import { GitHub as LoginWithGitHub } from '~/components/login/GitHub'
import { Google as LoginWithGoogle } from '~/components/login/Google'

export const Login = (props: { firebase: any; auth: firebase.auth.Auth }) => {
  const { firebase, auth } = props
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="login-form">
          <h3 className="title has-text-black">Login</h3>
          <hr className="login-hr" />
          <p className="subtitle has-text-black">
            Please login to proceed.
          </p>{' '}
          <LoginWithGoogle firebase={firebase} auth={auth} />
          <LoginWithGitHub firebase={firebase} auth={auth} />{' '}
        </div>
      </div>
    </div>
  )
}
