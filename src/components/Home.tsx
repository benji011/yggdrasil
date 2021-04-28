import '~/assets/css/home/home.css'
import Discussion from '~/assets/svg/discussion.svg'

export const Home = () => {
  return (
    <section className="hero is-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns  is-vcentered reverse-columns">
            <div
              className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
              data-aos="fade-down"
            >
              <h1 className="title titled is-1 mb-6">Chat away!</h1>
              <h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                Click "Chatrooms" on your <strong>top left</strong> to get
                started!
              </h2>
            </div>
            <div
              data-aos="fade-right"
              className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
            >
              <figure className="image is-square">
                <img src={Discussion} alt="testing" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
