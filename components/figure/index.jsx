import { useCallback } from "react"
import { Layout } from "../layout"
import styles from "./styles.module.css"

export function Figure({ figure }) {
  const drawTriangle = useCallback(() => {
    const lengthArray = Array(Number(figure.measurement)).fill(figure.symbol)
    return lengthArray.map((_, i) => (
      <Layout flex key={i} style={{ justifyContent: "center" }}>
        {Array(i + 1)
          .fill(figure.symbol)
          .map((_, j) => (
            <p className={styles.symbol} key={i + j}>
              {figure.symbol}
            </p>
          ))}
      </Layout>
    ))
  }, [figure])

  if (figure.shape === "rectangle") {
    const lengthArray = Array(Number(figure.measurement)).fill(figure.symbol)
    return (
      <Layout style={{ letterSpacing: "16px" }}>
        {lengthArray.map((_, i) => (
          <Layout flex key={i}>
            {lengthArray.map((_, j) => (
              <p className={styles.symbol} key={i + j}>
                {figure.symbol}
              </p>
            ))}
          </Layout>
        ))}
      </Layout>
    )
  }

  if (figure.shape === "perfect triangle") {
    return <Layout style={{ letterSpacing: "16px" }}>{drawTriangle()}</Layout>
  }

  if (figure.shape === "diamond") {
    const lengthArray = Array(Number(figure.measurement)).fill(figure.symbol)

    return (
      <Layout style={{ letterSpacing: "16px" }}>
        {drawTriangle()}
        {lengthArray.map((_, i) => (
          <Layout flex key={i} style={{ justifyContent: "center" }}>
            {Array(figure.measurement - (i + 1))
              .fill(figure.symbol)
              .map((_, j) => (
                <p className={styles.symbol} key={i + j}>
                  {figure.symbol}
                </p>
              ))}
          </Layout>
        ))}
      </Layout>
    )
  }

  return <p className={styles.symbol}>This shape is not availabled</p>
}
