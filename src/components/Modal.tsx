import React from 'react'

import '~/assets/css/modal.css'

export const Modal = (props: {
  showModal: boolean
  setShowModal: Function
}) => {
  const { showModal, setShowModal } = props

  return (
    <div
      className={`${showModal ? 'modal display-block' : 'modal display-none'}`}
    >
      <section className="modal-main">
        <div className="container">
          <h1 className="title">Add new chatroom</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> I agree to the{' '}
                <a href="/">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field is-grouped grouped-buttons">
            <p className="control">
              <button className="button is-primary modal-button" type="button">
                Submit
              </button>
            </p>
            <p className="control">
              <button
                className="button is-danger modal-button"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
