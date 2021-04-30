export interface IThread {
  id: string
  createdAt: {
    nanoseconds: number
    seconds: number
  }
  title: string
  description: string
  author: string
  isLocked: boolean
}
