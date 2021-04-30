import firebase from 'firebase/app'
import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'

import '~/assets/css/navbar/threads.css'
import { Button } from '~/components/common/Button'
import { IThread } from '~/models/IThread'
import { scrollToBottom } from '~/utils/helper'

export const Threads = (props: {
  firestore: firebase.firestore.Firestore
  setThreadData: Function
  setShowModal: Function
}) => {
  const { firestore, setThreadData, setShowModal } = props
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
  const [showThreads, setShowThreads] = useState(false)

  /**
   * Redirect user to chatroom
   *
   * @param thread A thread object
   */
  const goToChatroom = (thread: IThread) => {
    scrollToBottom()
    setThreadData(thread)
    setShowThreads(!showThreads)
  }

  /**
   * Add new chatroom
   */
  const addNewChatroom = () => {
    setShowModal(true)
    setShowThreads(!showThreads)
  }

  return (
    <div className={`nav-window dropdown ${showThreads ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <span className="icon-text">
          <button
            className="button is-primary "
            onClick={() => setShowThreads(!showThreads)}
          >
            <span className="icon">
              <i className="fas fa-angle-down"></i>
            </span>
            <span>Chatrooms</span>
          </button>
        </span>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>
              <i className="fas fa-info-circle" /> You can create up to{' '}
              <strong>max 2 rooms</strong>.
            </p>
            <hr className="dropdown-divider" />
            <Button
              className="button is-primary"
              text="Add"
              icon="fas fa-plus-square"
              onClick={addNewChatroom}
            />
          </div>
          <hr className="dropdown-divider" />
          {threads && threads.length > 0 ? (
            threads.map((thread: IThread) => (
              <Link
                onClick={() => goToChatroom(thread)}
                key={thread.id}
                to={`/room/${thread.id}`}
                className="dropdown-item thread-title"
              >
                <i className="fas fa-door-open door-icon" />
                {thread.title}
              </Link>
            ))
          ) : (
            <div className="dropdown-item">
              <p>No rooms created yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
