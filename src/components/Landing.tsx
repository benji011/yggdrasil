import '~/assets/css/landing.css'

export const Landing = () => {
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
                <a className="button is-primary is-medium">
                  Join a conversation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
