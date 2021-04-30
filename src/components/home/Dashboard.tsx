import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'

import '~/assets/css/home/cards.css'
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

  return (
    <div className="container">
      <h1 className="title">Your rooms</h1>
      <h4 className="subtitle">
        These are your chatrooms. <strong>Note: </strong>you can only create 2
        at a time.
      </h4>
      <div className="row columns is-multiline">
        {threads &&
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
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
