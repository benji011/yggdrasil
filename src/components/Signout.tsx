import firebase from 'firebase/app'

export const Signout = (props: { auth: firebase.auth.Auth }) => {
  const { auth } = props
  return (
    auth.currentUser && (
      <button className="button is-primary" onClick={() => auth.signOut()}>
        Sign out
      </button>
    )
  )
}
