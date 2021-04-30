import firebase from 'firebase/app'
import React, { FormEvent, useState } from 'react'

import '~/assets/css/modal.css'
import New from '~/assets/svg/new.svg'
import { Button } from '~/components/common/Button'
import { Input } from '~/components/common/Input'

/**
 * A modal component that contains a form
 *
 * TODO: Reuse this later
 * @param props
 * @returns
 */
export const AddChatroomModal = (props: {
  user: firebase.User | undefined | null
  showModal: boolean
  setShowModal: Function
  firestore: firebase.firestore.Firestore
}) => {
  const { user, showModal, setShowModal, firestore } = props
  const initialFormData = {
    createdAt: {
      nanoseconds: 0,
      seconds: 0,
    },
    title: '',
    description: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  /**
   * Send request to add new chatroom
   *
   * @param e
   */
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const threadsRef: firebase.firestore.CollectionReference = firestore.collection(
      'threads'
    )
    await threadsRef.add({
      ...formData,
      createdAt: {
        nanoseconds: 0,
        seconds: parseInt((new Date().getTime() / 1000).toString()),
      },
      author: user?.uid,
    })
    setShowModal(false)
    setFormData(initialFormData)
  }

  return (
    <div
      className={`${showModal ? 'modal display-block' : 'modal display-none'}`}
    >
      <section className="modal-main">
        <div className="container hero-body has-text-centered">
          <h1 className="title">Add new chatroom</h1>
          <img className="modal-img" src={New} alt="Delete thread" />
          <Input
            className="input"
            label="Title"
            placeholder="Discussion title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <Input
            className="input"
            label="Description"
            placeholder="Give a brief overview on what you'd like to talk about"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
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
