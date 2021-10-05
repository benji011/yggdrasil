import firebase from 'firebase/app'
import React, { FormEvent, useState, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useParams } from 'react-router-dom'

import '~/assets/css/chatroom/message/message.css'
import { Message } from '~/components/chatroom/Message'
import { Button } from '~/components/common/Button'
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
  const { id } = useParams<{ id: string }>()
  const messagesRef: firebase.firestore.CollectionReference = firestore.collection(
    'messages'
  )
  const query: firebase.firestore.Query<firebase.firestore.DocumentData> = messagesRef
    .orderBy('createdAt')
    .limit(25)
    .where("threadId", "==", id)
  const [messages]: [
    IMessage[] | undefined,
    boolean,
    firebase.FirebaseError | undefined
  ] = useCollectionData(query, { idField: 'id' })

  const [formMessage, setFormMessage] = useState('')

  useEffect(()=> {
    scrollToBottom()
  },[messages])
  
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
    if (!threadData.isLocked) {
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
    }
  }

  return (
    <div>
      <section className="hero is-primary is-small">
        <div className="hero-body">
          <p className="title">{threadData.title}</p>
          <p className="subtitle">{threadData.description}</p>
          <strong>{transformThreadDate(threadData.createdAt.seconds)}</strong>
        </div>
      </section>
      <div id="messages" className="messages-window">
        {messages &&
        ((messages as unknown) as IMessage[])
          .map((message: IMessage) => (
            <Message key={message.id} message={message} auth={auth} />
          ))}
      </div>
      <div className="container has-text-centered">
        <form onSubmit={onSubmit} className="send-message-form">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input send-message-input"
                placeholder={
                  threadData.isLocked ? 'Locked' : 'Type your message here'
                }
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                disabled={threadData.isLocked}
              />
            </div>
            <div className="control">
              <Button
                className="button is-primary send-message-button"
                icon="far fa-paper-plane send-icon"
                onClick={onSubmit}
                isDisabled={threadData.isLocked || !formMessage}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
