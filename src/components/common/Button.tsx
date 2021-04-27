import { IButton } from '~/models/common/IButton'

export const Button = (props: IButton) => {
  const { className, text, icon, onClick } = props
  return (
    <button className={className} type="button" onClick={onClick}>
      <span>{text}</span>
      <span className="icon">
        <i className={icon} />
      </span>
    </button>
  )
}
