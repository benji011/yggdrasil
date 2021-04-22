import firebase from 'firebase/app'

export const Signout = (props: { auth: firebase.auth.Auth }) => {
  const { auth } = props
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign out</button>
  )
}
