import { Link } from 'react-router-dom'

import '~/assets/css/landing.css'
import ChatScreenshot from '~/assets/img/yggdrasil-chat-example.png'
import Friendship from '~/assets/svg/friendship.svg'
import { Button } from '~/components/common/Button'

export const Landing = () => {
  return (
    <section className="hero is-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered reverse-columns landing-container-item">
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
                <img src={Friendship} alt="testing" />
              </figure>
            </div>
            <div
              className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd"
              data-aos="fade-down"
            >
              <h4 className="title titled is-1 mb-6">
                Welcome to <strong>Yggdrasil</strong>
              </h4>
              <h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                <strong>Yggdrasil</strong> is an open source public chatroom
                designed to let you talk to other people openly on the internet.
                Login with either your GitHub or Google to join in the fun!
              </h2>
              <Link to="/login">
                <Button
                  className="button is-primary is-medium"
                  text="Join a conversation"
                  icon="fas fa-signature"
                />
              </Link>
            </div>
          </div>
          <div className="columns is-vcentered reverse-columns">
            <div
              className="column
          is-7-mobile is-offset-1-mobile
          is-7-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd"
              data-aos="fade-down"
            >
              <h4 className="title titled is-1 mb-6">How it works</h4>
              <h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                Join or create a chatroom, then chat away! Yggdrasil is{' '}
                <strong>free</strong> and <strong>secure</strong>.
              </h2>
              <Link to="/about">
                <Button
                  className="button is-primary is-medium"
                  text="Learn more"
                  icon="fas fa-search"
                />
              </Link>
            </div>
            <div
              data-aos="fade-right"
              className="column
          is-12-mobile is-offset-1-mobile
          is-12-tablet is-offset-1-tablet
          is-8-desktop is-offset-1-desktop
          is-8-widescreen is-offset-1-widescreen
          is-8-fullhd is-offset-1-fullhd"
            >
              <figure className="image">
                <img src={ChatScreenshot} alt="testing" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
