import { ICreatedAt } from '~/models/ICreatedAt'

export interface IMessage {
  id: string
  displayName: string
  text: string
  uid: string
  photoURL: string
  createdAt: ICreatedAt
  threadId: string
}
