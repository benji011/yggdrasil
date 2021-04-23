import { ISignout } from '~/models/ISignout'

export const Signout = (props: ISignout) => {
  const { auth } = props
  return (
    auth.currentUser && (
      <span className="icon-text">
        <button className="button is-danger " onClick={() => auth.signOut()}>
          <span>Signout</span>
          <span className="icon">
            <i className="fas fa-sign-out-alt" />
          </span>
        </button>
      </span>
    )
  )
}
