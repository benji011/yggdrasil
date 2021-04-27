import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import '~/assets/css/login/icon.css'

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
      <button
        className="button btn-block btn-social btn-github login-button"
        onClick={githubSigninPrompt}
      >
        <i className="fab fa-github social-icon"></i> Sign in with Github
      </button>
    </p>
  )
}
