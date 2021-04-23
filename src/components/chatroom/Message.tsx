import firebase from 'firebase/app'
import { IMessage } from '~/models/IMessage'

import '~/assets/css/chatroom/message/message.css'

export const Message = (props: {
  auth: firebase.auth.Auth
  message: IMessage
}) => {
  const { auth, message } = props
  const uid: string = message?.uid
  const text: string = message?.text
  const photoURL: string = message?.photoURL
  const currentUser: any = auth?.currentUser
  const messageClass: string =
    uid === currentUser.uid ? 'is-primary' : 'is-info'
  const profileImgClass: string =
    uid === currentUser.uid ? 'current-user' : 'friend'
  const displayName: string =
    uid === currentUser.uid ? 'Me' : message?.displayName

  return (
    <span className={`message ${messageClass}`}>
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
    </span>
  )
}
