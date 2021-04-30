import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'

import '~/assets/css/home/cards.css'
import Pending from '~/assets/svg/pending.svg'
import { Button } from '~/components/common/Button'
import { IThread } from '~/models/IThread'
import { scrollToBottom } from '~/utils/helper'

export const Dashboard = (props: {
  firestore: firebase.firestore.Firestore
  setThreadData: Function
}) => {
  const { firestore, setThreadData } = props
  const threadsRef: firebase.firestore.CollectionReference = firestore.collection(
    'threads'
  )
  const threadsQuery: firebase.firestore.Query<firebase.firestore.DocumentData> = threadsRef
    .orderBy('createdAt')
    .limit(25)
  const [threads]: [
    IThread[] | undefined,
    boolean,
    firebase.FirebaseError | undefined
  ] = useCollectionData(threadsQuery, {
    idField: 'id',
  })

  /**
   * Redirect user to chatroom
   *
   * @param thread A thread object
   */
  const goToChatroom = (thread: IThread) => {
    scrollToBottom()
    setThreadData(thread)
  }

  /**
   * Deletes a chatroom
   *
   * @param thread A thread object
   */
  const deleteChatroom = async (thread: IThread) => {
    try {
      await firestore.collection('threads').doc(thread.id).delete()
    } catch {
      console.log(`Error occured deleting this room`)
    }
  }

  return (
    <div className="container">
      {threads && threads.length > 0 && (
        <>
          <h1 className="title">Your rooms</h1>
          <h4 className="subtitle">
            These are your chatrooms. <strong>Note: </strong>you can only create
            2 at a time.
          </h4>
        </>
      )}
      <div className="row columns is-multiline">
        {threads && threads.length > 0 ? (
          threads.map((thread: IThread) => (
            <div className="column is-4" key={thread.id}>
              <div className="card large">
                <div className="card-image">
                  <section className="hero is-primary">
                    <div className="hero-body">
                      <p className="title">{thread.title}</p>
                    </div>
                  </section>
                </div>
                <div className="card-content">
                  <div className="content" />
                  <p>{thread.description}</p>
                  <div className="field is-grouped dashboard-grouped-buttons">
                    <p className="control">
                      <Link
                        to={`/room/${thread.id}`}
                        onClick={() => goToChatroom(thread)}
                      >
                        <Button
                          className="button is-primary modal-button"
                          text="Enter"
                          icon="fas fa-door-open door-icon"
                        />
                      </Link>
                    </p>
                    <p className="control">
                      <Button
                        className="button is-danger modal-button is-danger-button"
                        text="Delete"
                        icon="fas fa-trash-alt"
                        onClick={() => deleteChatroom(thread)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <section className="hero is-white">
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
                    <h1 className="title titled is-1 mb-6">
                      You have not created any discussions yet!
                    </h1>
                    <h2 className=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                      Click "Chatrooms" on your <strong>top left</strong> to
                      join a conversation, or create one yourself!
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
                      <img src={Pending} alt="testing" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
