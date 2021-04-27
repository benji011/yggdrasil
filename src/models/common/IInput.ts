import { FormEvent } from 'react'

export interface IInput {
  className: string
  label: string
  placeholder: string
  value?: string
  onChange?: (e: any) => void
}
