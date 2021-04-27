import { ITextarea } from '~/models/common/ITextarea'

export const Textarea = (props: ITextarea) => {
  const { className, label, placeholder, onChange } = props
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          className={className}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
