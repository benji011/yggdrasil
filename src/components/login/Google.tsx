import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { LoginButton } from '~/components/common/LoginButton'

/**
 * Login with Google
 * @param props
 * @returns
 */
export const Google = (props: { auth: firebase.auth.Auth }) => {
  const { auth } = props
  const googleSigninPrompt = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <p className="control">
      <LoginButton
        className="button btn-block btn-social btn-google login-button"
        text="Sign in with Google"
        icon="fab fa-google social-icon"
        onClick={googleSigninPrompt}
      />
    </p>
  )
}
