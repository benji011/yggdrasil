import React, { FormEvent, useState } from 'react'
import firebase from 'firebase/app'

import { Message } from '~/components/chatroom/Message'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const Chatroom = (props: {
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth
}) => {
  const { firestore, auth } = props
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, { idField: 'id' })
  const [formMessage, setFormMessage] = useState('')

  /**
   * Send message by adding to the 'messages' collection over
   * on firebase
   *
   * @param e FormEvent type used to prevent page from refreshing
   */
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const uid = auth.currentUser?.uid
    const photoURL = auth.currentUser?.photoURL

    await messagesRef.add({
      text: formMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    })
    setFormMessage('')
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
        <button className="button is-primary">Send</button>
      </form>
    </div>
  )
}
