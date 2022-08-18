import styles from "./styles.module.css"

export function Checkbox({ label }) {
  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  )
}
