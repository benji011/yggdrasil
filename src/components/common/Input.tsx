import { IInput } from '~/models/common/IInput'

export const Input = (props: IInput) => {
  const { className, label, value, placeholder, onChange } = props
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className={className}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
