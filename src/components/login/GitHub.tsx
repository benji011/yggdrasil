import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

/**
 * Login with GitHub
 * @param props
 * @returns
 */
export const GitHub = (props: { firebase: any; auth: firebase.auth.Auth }) => {
  const { firebase, auth } = props
  const githubSigninPrompt = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    auth.signInWithPopup(provider)
  }
  return <button onClick={githubSigninPrompt}>Sign in with GitHub</button>
}
