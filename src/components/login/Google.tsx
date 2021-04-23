import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/**
 * Login with Google
 * @param props
 * @returns
 */
export const Google = (props: { firebase: any; auth: firebase.auth.Auth }) => {
  const { firebase, auth } = props
  const googleSigninPrompt = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <p className="control">
      <button
        className="button btn-block btn-social btn-google login-button"
        onClick={googleSigninPrompt}
      >
        <i className="fab fa-google social-icon"></i> Sign in with Google
      </button>
    </p>
  )
}
