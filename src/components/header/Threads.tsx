import React, { useState } from 'react'

export const Threads = () => {
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
              You can insert <strong>any type of content</strong> within the
              dropdown menu.
            </p>
          </div>
          <hr className="dropdown-divider" />
          <div className="dropdown-item">
            <p>
              You simply need to use a <code>&lt;div&gt;</code> instead.
            </p>
          </div>
          <hr className="dropdown-divider" />
          <a href="/" className="dropdown-item">
            This is a link
          </a>
        </div>
      </div>
    </div>
  )
}
