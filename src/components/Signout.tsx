import { ISignout } from '~/models/ISignout'

export const Signout = (props: ISignout) => {
  const { auth } = props
  return (
    auth.currentUser && (
      <span className="icon-text">
        <button
          className="button is-danger logout-button"
          onClick={() => auth.signOut()}
        >
          <span>Sign out</span>
          <span className="icon">
            <i className="fas fa-sign-out-alt" />
          </span>
        </button>
      </span>
    )
  )
}
