import firebase from 'firebase/app'
import React from 'react'

import { GitHub as LoginWithGitHub } from '~/components/login/GitHub'
import { Google as LoginWithGoogle } from '~/components/login/Google'

export const Login = (props: { firebase: any; auth: firebase.auth.Auth }) => {
  const { firebase, auth } = props
  return (
    <div className="field is-grouped">
      <LoginWithGoogle firebase={firebase} auth={auth} />
      <LoginWithGitHub firebase={firebase} auth={auth} />
    </div>
  )
}
