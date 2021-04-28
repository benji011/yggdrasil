import '~/assets/css/landing.css'
import { Button } from '~/components/common/Button'

export const Landing = (props: { history: any }) => {
  const { history } = props
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column">
            <h1 className="title">Yggdrasil</h1>
            <h2 className="subtitle">
              Yggdrasil is an online discussion/chatroom where you can join a
              "table" and talk to random folks about anything. You can pull up a
              table and invite people to join in
            </h2>
            <div className="field is-grouped landing-buttons">
              <p className="control">
                <Button
                  className="button is-primary is-medium"
                  text="Join a conversation"
                  icon="fas fa-signature"
                  onClick={() => history.push('/login')}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
