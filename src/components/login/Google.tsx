import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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
      <a
        className="button btn-block btn-social btn-google login-button"
        onClick={googleSigninPrompt}
      >
        <i className="fa fa-google social-icon"></i> Sign in with Google
      </a>
    </p>
  )
}
