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
  const messageClass = uid === currentUser.uid ? 'is-success' : 'is-info'
  const profileImgClass = uid === currentUser.uid ? 'current-user' : 'friend'

  return (
    <span className={`tag is-medium ${messageClass}`}>
      <img
        className={`profile-img ${profileImgClass}`}
        src={
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
        alt={`${uid}`}
      />
      <p>{text}</p>
    </span>
  )
}
