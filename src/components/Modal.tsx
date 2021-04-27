import React from 'react'

import '~/assets/css/modal.css'
import { Button } from '~/components/common/Button'
import { Checkbox } from '~/components/common/Checkbox'
import { Input } from '~/components/common/Input'
import { Textarea } from '~/components/common/Textarea'

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
          <Input
            className="input"
            label="Title"
            placeholder="Discussion title"
          />

          <Textarea
            className="textarea"
            label="Message"
            placeholder="Break the ice!"
          />
          <Checkbox label=" I agree to the " a="terms and conditions" />

          <div className="field is-grouped grouped-buttons">
            <p className="control">
              <Button
                className="button is-primary modal-button"
                text="Submit"
                icon="fas fa-check-square"
                onClick={() => void 0}
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
        </div>
      </section>
    </div>
  )
}
