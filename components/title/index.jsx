import styles from "./styles.module.css"

export function Title({ children }) {
  return <h4 className={styles.title}>{children}</h4>
}
