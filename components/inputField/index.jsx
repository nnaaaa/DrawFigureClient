// import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from "react"
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import styles from "./styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function InputField({ placeholder, label, value, onChange, name,error }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className={styles.input}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export function PasswordField({ placeholder, label, value, onChange, name,error }) {
  const [isHidden, setHidden] = useState(true)

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div style={{ display: "flex", position: "relative" }}>
        <input
          type={isHidden ? "password" : "text"}
          name={name}
          className={styles.inputPassword}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            color: isHidden ? "#e2e2e2" : "#444444",
            letterSpacing: isHidden ? "10px" : "inherit",
          }}
        />
        {!isHidden ? (
          <FontAwesomeIcon
            icon={faEye}
            className={styles.icon}
            onClick={() => setHidden((pre) => !pre)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEyeSlash}
            className={styles.icon}
            onClick={() => setHidden((pre) => !pre)}
          />
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export function SelectField({
  label,
  options,
  placeholder,
  onChange: setValue,
  value,
  error
}) {
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <div className={styles.select}>
        <select
          id="standard-select"
          defaultValue={value ? value : "chose"}
          onChange={onChange}
        >
          {placeholder && (
            <option value="chose" disabled hidden className={styles.option}>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className={styles.option}
              selected={value === option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
