import { IButton } from '~/models/common/IButton'

export const Button = (props: IButton) => {
  const { className, text, icon, onClick, isDisabled } = props
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{text}</span>
      <span className="icon">
        <i className={icon} />
      </span>
    </button>
  )
}
