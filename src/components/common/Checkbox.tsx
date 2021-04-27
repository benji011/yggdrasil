import { ICheckbox } from '~/models/common/ICheckbox'

export const Checkbox = (props: ICheckbox) => {
  const { label, a } = props
  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" />
          {label}
          <a href="/">{a}</a>
        </label>
      </div>
    </div>
  )
}
