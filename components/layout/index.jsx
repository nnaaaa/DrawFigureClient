import styles from "./styles.module.css"

export function Layout({
  style,
  children,
  fullWidth,
  flex,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  width,
  className,
}) {
  return (
    <div
      className={className}
      style={{
        width: fullWidth ? "100%" : width,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        display: flex ? "flex" : "block",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function Wrapper({ width = "auto", height = "auto", children }) {
  return (
    <div style={{ width, height }} className={styles.wrapper}>
      {children}
    </div>
  )
}
