import firebase from 'firebase/app'
import React, { FormEvent } from 'react'

import '~/assets/css/modal.css'
import Trash from '~/assets/svg/trash.svg'
import { Button } from '~/components/common/Button'
import { IThread } from '~/models/IThread'

/**
 * A modal component that contains a form
 *
 * @param props
 * @returns
 */
export const DeleteChatroomModal = (props: {
  showModal: boolean
  setShowModal: Function
  firestore: firebase.firestore.Firestore
  threadToBeDeleted: IThread
}) => {
  const { showModal, setShowModal, firestore, threadToBeDeleted } = props

  /**
   * Send request to add new chatroom
   *
   * @param e
   */
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await firestore.collection('threads').doc(threadToBeDeleted.id).delete()
    setShowModal(false)
  }

  return (
    <div
      className={`${showModal ? 'modal display-block' : 'modal display-none'}`}
    >
      <section className="modal-main">
        <div className="container hero-body has-text-centered">
          <h1 className="title">
            Delete the room "{threadToBeDeleted.title}"?
          </h1>
          <p className="subtitle">
            <strong>Note:</strong>This action is irreversible. However, you can
            always create another one like it later.
          </p>
          <img className="modal-img" src={Trash} alt="Delete thread" />
        </div>
        <div className="field is-grouped grouped-buttons">
          <p className="control">
            <Button
              className="button is-primary modal-button"
              text="Submit"
              icon="fas fa-check-square"
              onClick={onSubmit}
            />
          </p>
          <p className="control">
            <Button
              className="button is-danger modal-button is-danger-button"
              text="Cancel"
              icon="fas fa-window-close"
              onClick={() => setShowModal(false)}
            />
          </p>
        </div>
      </section>
    </div>
  )
}
