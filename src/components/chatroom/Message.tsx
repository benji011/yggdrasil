import firebase from 'firebase/app'
import { IMessage } from '~/models/IMessage'

export const Message = (props: {
  auth: firebase.auth.Auth
  message: IMessage
}) => {
  const { auth, message } = props
  const uid: string = message?.uid
  const text: string = message?.text
  const photoURL: string = message?.photoURL
  const currentUser: any = auth?.currentUser
  const messageClass = uid === currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
      <img
        src={
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
        alt={`${uid}`}
      />
      <p>{text}</p>
    </div>
  )
}
