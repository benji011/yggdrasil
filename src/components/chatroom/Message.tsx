import firebase from 'firebase/app'

import '~/assets/css/chatroom/message/message.css'
import { IMessage } from '~/models/IMessage'
import { transformSecondsToDate } from '~/utils/transformer'

export const Message = (props: {
  auth: firebase.auth.Auth
  message: IMessage
}) => {
  const { auth, message } = props
  const uid: string = message?.uid
  const text: string = message?.text
  const photoURL: string = message?.photoURL
  const createdAt: string = transformSecondsToDate(message?.createdAt.seconds)
  const currentUser: firebase.User | null = auth?.currentUser
  const messageClass: string =
    uid === currentUser?.uid ? 'is-primary' : 'is-info'
  const profileImgClass: string =
    uid === currentUser?.uid ? 'current-user' : 'friend'
  const displayName: string =
    uid === currentUser?.uid ? 'Me' : message?.displayName

  return (
    <span className={`message ${messageClass}`}>
      <span className="message-contents">
        <img
          className={`profile-img ${profileImgClass}`}
          src={
            photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
          }
          alt={`${uid}`}
        />
        <p>
          <strong>{`${displayName}: `}</strong>
          {text}
        </p>
        <p>{createdAt}</p>
      </span>
    </span>
  )
}
