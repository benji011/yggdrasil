import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import '~/assets/css/login/icon.css'
import { LoginButton } from '~/components/common/LoginButton'

/**
 * Login with GitHub
 * @param props
 * @returns
 */
export const GitHub = (props: { auth: firebase.auth.Auth }) => {
  const { auth } = props
  const githubSigninPrompt = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <p className="control">
      <LoginButton
        className="button btn-block btn-social btn-github login-button"
        text="Sign in with GitHub"
        icon="fab fa-github social-icon"
        onClick={githubSigninPrompt}
      />
    </p>
  )
}
