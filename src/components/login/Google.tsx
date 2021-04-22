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
  return <button onClick={googleSigninPrompt}>Sign in with Google</button>
}
