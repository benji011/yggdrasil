import firebase from 'firebase/app'
import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const Threads = (props: { firestore: firebase.firestore.Firestore }) => {
  const { firestore } = props
  const threadsRef = firestore.collection(
    '45dcf07c-a3f8-11eb-bcbc-0242ac130002'
  )
  const threadsQuery = threadsRef.orderBy('createdAt').limit(25)
  const [threads] = useCollectionData(threadsQuery, { idField: 'id' })
  const [showThreads, setShowThreads] = useState(false)

  return (
    <div className={`dropdown ${showThreads ? 'is-active' : ''}`}>
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
              <i className="fas fa-info-circle" /> You can create{' '}
              <strong>any number</strong> of chatrooms. Just don't go crazy
            </p>
          </div>
          <hr className="dropdown-divider" />
          {threads &&
            threads.map((thread: any) => (
              <a key={thread.id} href="/" className="dropdown-item">
                {thread.title}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}
