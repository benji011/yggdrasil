import { FormEvent } from 'react'

export interface IButton {
  className: string
  text?: string
  icon: string
  isDisabled?: boolean
  onClick?: any //() => void // TODO: fix later
}
