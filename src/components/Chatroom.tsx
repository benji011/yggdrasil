import firebase from 'firebase/app'
import React, { FormEvent, useState } from 'react'

import '~/assets/css/chatroom/message/message.css'
import { Message } from '~/components/chatroom/Message'

export const Chatroom = (props: {
  messages: any
  messagesRef: any
  auth: firebase.auth.Auth
}) => {
  const { messages, messagesRef, auth } = props
  const [formMessage, setFormMessage] = useState('')

  /**
   * Send message by adding to the 'messages' collection over
   * on firebase
   *
   * @param e FormEvent type used to prevent page from refreshing
   */
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const uid: string | undefined = auth.currentUser?.uid
    const displayName: string | undefined | null = auth.currentUser?.displayName
    const photoURL: string | undefined | null = auth.currentUser?.photoURL
    const msg: string = formMessage
    setFormMessage('')
    await messagesRef.add({
      text: msg,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
    })
  }

  return (
    <div>
      <div className="hero-body">
        {messages &&
          messages.map((message: any) => (
            <Message key={message.id} message={message} auth={auth} />
          ))}
      </div>
      <form onSubmit={onSubmit}>
        <input
          className="textarea is-primary"
          type="text"
          placeholder="type your message here"
          value={formMessage}
          onChange={(e) => setFormMessage(e.target.value)}
        />
        <button className="button is-primary">
          <i className="far fa-paper-plane send-icon" />
        </button>
      </form>
    </div>
  )
}
