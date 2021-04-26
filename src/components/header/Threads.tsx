import firebase from 'firebase/app'
import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Link } from 'react-router-dom'

import '~/assets/css/navbar/threads.css'

export const Threads = (props: {
  firestore: firebase.firestore.Firestore
  setThreadData: Function
}) => {
  const { firestore, setThreadData } = props
  const threadsRef = firestore.collection('threads')
  const threadsQuery = threadsRef.orderBy('createdAt').limit(25)
  const [threads] = useCollectionData(threadsQuery, { idField: 'id' })
  const [showThreads, setShowThreads] = useState(false)

  return (
    <div className={`nav-window dropdown ${showThreads ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <span className="icon-text">
          <button
            className="button is-primary "
            onMouseEnter={() => setShowThreads(!showThreads)}
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
          </div>
          <hr className="dropdown-divider" />
          {threads &&
            threads.map((thread: any) => (
              <Link
                onClick={() => setThreadData(thread)}
                key={thread.id}
                to={`/room/${thread.id}`}
                className="dropdown-item thread-title"
                onMouseLeave={() => setShowThreads(!showThreads)}
              >
                <i className="fas fa-door-open door-icon" />
                {thread.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
