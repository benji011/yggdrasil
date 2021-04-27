import { IButton } from '~/models/common/IButton'

export const LoginButton = (props: IButton) => {
  const { className, text, icon, onClick } = props
  return (
    <button className={className} onClick={onClick}>
      <i className={icon} /> {text}
    </button>
  )
}
