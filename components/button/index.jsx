import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Layout } from "../layout"
import styles from "./styles.module.css"

export function ContainedButton({ text, onClick, type, startIcon, style }) {
  return (
    <button
      className={styles.containedButton}
      onClick={onClick}
      type={type}
      style={style}
    >
      {startIcon && (
        <FontAwesomeIcon
          icon={startIcon}
          style={{ marginRight: "10px" }}
          width="24px"
        />
      )}
      {text}
    </button>
  )
}

export function TextButton({ startIcon, text, onClick, style }) {
  return (
    <button className={styles.textButton} style={style} onClick={onClick}>
      <Layout flex style={{ alignItems: "center" }}>
        <FontAwesomeIcon icon={startIcon} />
        <Layout ml="16px">
          <p>{text}</p>
        </Layout>
      </Layout>
    </button>
  )
}
