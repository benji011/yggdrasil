import { ISignout } from '~/models/ISignout'

export const Signout = (props: ISignout) => {
  const { auth } = props
  return (
    auth.currentUser && (
      <span className="icon-text">
        <button className="button is-primary " onClick={() => auth.signOut()}>
          <span className="icon">
            <i className="fas fa-sign-out-alt"></i>
          </span>
          <span>Signout</span>
        </button>
      </span>
    )
  )
}
