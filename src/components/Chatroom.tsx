import firebase from 'firebase/app'
import React, { FormEvent, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'

import '~/assets/css/chatroom/message/message.css'
import { Message } from '~/components/chatroom/Message'
import { IThread } from '~/models/IThread'

export const Chatroom = (props: {
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth
  threadData: any
}) => {
  const { firestore, auth, threadData } = props
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, { idField: 'id' })

  const [formMessage, setFormMessage] = useState('')
  const { id } = useParams<IThread>()

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
      threadId: id,
      displayName,
      uid,
      photoURL,
    })
  }

  /**
   * Return filtered messages based on thread
   * @param message
   */
  const getFilteredMessages = (messages: any) => {
    console.log(threadData)
    return messages.filter(function (message: any) {
      return message?.threadId === id
    })
  }

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">{threadData.title}</p>
          <p className="subtitle">Primary subtitle</p>
        </div>
      </section>
      <div className="hero-body">
        {messages &&
          getFilteredMessages(messages).map((message: any) => (
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
