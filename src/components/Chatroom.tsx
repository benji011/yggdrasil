import firebase from 'firebase/app'
import React, { FormEvent, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'

import '~/assets/css/chatroom/message/message.css'
import { Message } from '~/components/chatroom/Message'
import { IMessage } from '~/models/IMessage'
import { IThread } from '~/models/IThread'
import { scrollToBottom } from '~/utils/helper'
import { transformThreadDate } from '~/utils/transformer'

export const Chatroom = (props: {
  firestore: firebase.firestore.Firestore
  auth: firebase.auth.Auth
  threadData: IThread
}) => {
  const { firestore, auth, threadData } = props
  const messagesRef: firebase.firestore.CollectionReference = firestore.collection(
    'messages'
  )
  const query: firebase.firestore.Query<firebase.firestore.DocumentData> = messagesRef
    .orderBy('createdAt')
    .limit(25)
  const [messages]: [
    IMessage[] | undefined,
    boolean,
    firebase.FirebaseError | undefined
  ] = useCollectionData(query, { idField: 'id' })

  const [formMessage, setFormMessage] = useState('')
  const { id } = useParams<{ id: string }>()

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
      createdAt: {
        nanoseconds: 0,
        seconds: parseInt((new Date().getTime() / 1000).toString()),
      },
      threadId: id,
      displayName,
      uid,
      photoURL,
    })
    scrollToBottom()
  }

  /**
   * Return filtered messages based on thread
   *
   * @param message
   */
  const getFilteredMessages = (messages: IMessage[]) => {
    return messages.filter(function (message: IMessage) {
      return message?.threadId === id
    })
  }

  return (
    <div>
      <section className="hero is-primary is-small">
        <div className="hero-body">
          <p className="title">{threadData.title}</p>
          <p className="subtitle">
            {transformThreadDate(threadData.createdAt.seconds)}
          </p>
        </div>
      </section>
      <div id="messages" className="hero-body messages-window">
        {messages &&
          getFilteredMessages(
            (messages as unknown) as IMessage[]
          ).map((message: IMessage) => (
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
